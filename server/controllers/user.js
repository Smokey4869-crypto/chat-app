import { UserModel } from '../models/User.js'
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        //save user info and respond
        const user = await newUser.save();
        res.status(200).json(user);

    } catch(err) {
        res.status(500).json(err)
    }
}

//login
export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({
            email: req.body.email
        })
        !user && res.status(404).json("User not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && req.status(400).json("Wrong password")

        res.status(200).json(user)
    } catch(err) {
        res.status(500).json(err)
    }
}
 
export const updateUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
          try {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
          } catch (err) {
            return res.status(500).json(err);
          }
        }
        try {
          const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
          });
          res.status(200).json("Account has been updated");
        } catch (err) {
          return res.status(500).json(err);
        }
      } else {
        return res.status(403).json("You can update only your account!");
      }
}

//delete user
export const deleteUser = async(req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await UserModel.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        } catch(err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can only delete your account");
    }
}


export const getUser = async(req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;

  try {
    const userId = userId 
    ? await UserModel.findById(userId)
    : await UserModel.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch(err) {
    res.status(500).json(err)
  }
}


export const getFriends = async(req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return UserModel.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });

    res.status(200).json(friendList)
  } catch(err) {
    res.status(500).json(err)
  }
}


export const followUser = async(req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const userToFollow = await UserModel.findById(req.params.id);
      const currentUser = await UserModel.findById(req.body.userId);

      if (!userToFollow.followers.includes(req.body.userId)) {
        await userToFollow.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("User has been followed");
      } else {
        res.status(403).json("You already follow this user");
      }
    } catch(err) {
      res.status(500).json(err)
    }
  }
}


export const unfollowUser = async(req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const userToUnfollow = await UserModel.findById(req.params.id);
      const currentUser = await UserModel.findById(req.body.userId);

      if (userToFollow.followers.includes(req.body.userId)) {
        await userToUnfollow.updateOne({ $pull: { followers: req.body.userId }});
        await currentUser.updateOne({ $pull: { followings: req.params.id }});
        
        res.status(200).json("User has been unfollowed");
      } else {
        res.status(403).json("You are not following this user")
      }
    } catch(err) {
      res.status(500).json(err);
    }
  }
}