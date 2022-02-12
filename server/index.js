import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import helmet from 'helmet';
import multer from 'multer';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';

import auth from './routes/auth.js'
import users from './routes/users.js'
import posts from './routes/posts.js'
import messages from './routes/messages.js'
import conversations from './routes/conversations.js'

dotenv.config();

const app = express();
const URI = process.env.DATABASE_URL
const PORT = process.env.port || 5004

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));

app.get('/', (req, res) => {
    res.send('SUCCESS')
})

app.use("/server/auth", auth);
app.use("/server/users", users);
app.use("/server/posts", posts);
app.use("/server/messages", messages);
app.use("/server/conversations", conversations);

//assets
app.use("/images", express.static(path.join(__dirname, "public/images")));

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to DB')
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }).catch((err) => {
        console.log('err', err)
    });

app.listen(8800, () => {
  console.log("Backend server is running!");
});