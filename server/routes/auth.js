import express from 'express'
import { register, login, logout, refreshToken } from '../controllers/auth.js'
import jwt from 'jsonwebtoken';

const router = express.Router();

//Register & Login
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout)

router.post("/refresh", refreshToken);
export default router;