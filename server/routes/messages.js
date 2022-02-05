import express from 'express';
import { addMessage, getMessages } from '../controllers/messages';

const router = express.Router();

router.post("/", addMessage);
router.get("/:conversationId", getMessages);

export default router;