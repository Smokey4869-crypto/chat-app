import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import auth from './routes/auth.js'

dotenv.config();

const app = express();
const URI = process.env.DATABASE_URL
const PORT = process.env.AUTH_PORT || 5504

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));

app.get('/', (req, res) => {
    res.send('SUCCESS')
})

app.use("/server/auth", auth);


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });