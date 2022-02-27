import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { UserModel } from '../models/User.js'

let refreshTokens = []

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
      //authentication
        // const user = await UserModel.findOne({
        //     email: req.body.email
        // })
        // !user && res.status(404).json("User not found");

        // const validPassword = await bcrypt.compare(req.body.password, user.password)
        // !validPassword && req.status(400).json("Wrong password")

        //authorization
        const data = req.body
        console.log(data)
        const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s'})  
    
        const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET)
        res.status(200).json({accessToken}) 
    } catch(err) {
        res.status(500).json(err)
    }
}

export const logout = async (req, res) => {
  const refreshToken = req.body.token
  refreshTokens = refreshTokens.filter((refToken) => refToken !== refreshToken)
  res.status(200)
}

export const refreshToken = async (req, res) => {

}