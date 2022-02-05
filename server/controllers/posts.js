import { PostModel } from '../models/Post.js'
import { UserModel } from '../models/User.js';

export const getPost = async(req, res) => {
    try {
        const post = PostModel.findById(req.params.id);
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
}

export const createPost = async(req, res) => {
    const newPost = new PostModel(req.body);
    
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err) {
        res.status(500).json(err);
    }
}


export const updatePost = async(req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("The post has been updated");
        } else {
            res.status(403).json("You can only update your post");
        }
    } catch(err) {
        res.status(500).json(err)
    }
}

export const deletePost = async(req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("The post has been deleted");
        } else {
            res.status(403).json("You can only delete your post")
        }
    } catch(err) {
        res.status(500).json(err);
    }
}


//Like or Dislike a Post
export const likePost = async(req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId }});
            res.status(200).json("The post has been liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId }});
            res.status(200).json("The post has been disliked");
        }
    } catch(err) {
        res.status(500).json(err);
    }
}

export const getTimelinePosts = async(req, res) => {
    try {
        const currentUser = await UserModel.findById(req.params.userId);
        const userPosts = await PostModel.find({ userId: currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return PostModel.find({ userId: friendId });
            })
        )

        res.status(200).json(userPosts.concat(...friendPosts));
    } catch(err) {
        res.status(500).json(err);
    }
}

export const getUserAllPosts = async(req, res) => {
    try {
        const user = await UserModel.findOne({
            username: req.params.username
        });
        const posts = await PostModel.find({
            userId: user._id
        })
        res.status(200).json(posts)
    } catch(err) {
        res.status(500).json(err)
    }
}