import express from 'express';
import { addConvo, getConvo, getConvoOfTwo } from '../controllers/conversations.js';

const router = express.Router();

router.post("/", addConvo);
router.get("/:userId", getConvo);
router.get("/find/:firstUserId/:secondUserId", getConvoOfTwo);

export default router;