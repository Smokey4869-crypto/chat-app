import express from 'express'
import { deleteUser, updateUser, getUser, unfollowUser, followUser, getFriends } from '../controllers/user.js'
import jwt from 'jsonwebtoken'

const router = express.Router();

//Register & Login
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

//Fetch
router.get("/", getUser);
// function authenToken(req, res, next) {
//     const authorizationHeader = req.headers['authorization']
//     //Beaer [token]
//     const token = authorizationHeader.split(' ')[1]
//     if (!token)
//         res.sendStatus(401) 
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
//         console.log(err, data);
//         if (err) res.sendStatus(403);
//         next();
//     })
// }

router.get("/friends/:userId", getFriends)

//Follower && Unfollow
router.put("/:id/unfollow", unfollowUser);
router.put("/:id/follow", followUser);


export default router;