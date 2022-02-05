import express from 'express';
import { createPost, deletePost, getPost, getTimelinePosts, getUserAllPosts, likePost, updatePost } from '../controllers/posts';

const router = express.Router();

//Create
router.post("/", createPost);

//Update
router.put("/:id", updatePost);
router.put("/:id/like", likePost);

//Delete
router.delete("/:id", deletePost);

//Fetch
router.get("/:id", getPost);
router.get("/profile/:username", getUserAllPosts);
router.get("/timeline/:userId", getTimelinePosts);

export default router;
