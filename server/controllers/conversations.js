import { ConversationModel } from '../models/Conversation.js'

export const addConvo = async(req, res) => {
    const newConvo = new ConversationModel({
        members: [req.body.senderId, req.body.receiverId]
    })

    try {
        const savedConvo = await newConvo.save();
        res.status(200).json(savedConvo);
    } catch(err) {
        res.status(500).json(err)
    }
}


export const getConvo = async(req, res) => {
    try {
        const convo = await ConversationModel.find({
            members: { $in: [req.params.userId]}
        })
        res.status(200).json(convo);
    } catch(err) {
        res.status(500).json(err)
    }
}

export const getConvoOfTwo = async(req, res) => {
    try {
        const convo = await ConversationModel.find({
            members: { $all: [req.params.firstUserId, req.params.secondUserId] }
        })
        res.status(200).json(convo)
    } catch(err) {
        res.status(500).json(err)
    }
}