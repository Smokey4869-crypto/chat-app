import express from 'express'
import { deleteUser, updateUser, getUser, unfollowUser, followUser, getFriends } from '../controllers/user.js'

const router = express.Router();

//Register & Login
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

//Fetch
router.get("/", getUser);
router.get("/friends/:userId", getFriends)

//Follower && Unfollow
router.put("/:id/unfollow", unfollowUser);
router.put("/:id/follow", followUser);


export default router;