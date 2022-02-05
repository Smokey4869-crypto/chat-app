import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import helmet from 'helmet';
import multer from 'multer';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const URI = process.env.DATABASE_URL
const PORT = process.env.port || 5004

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));

app.get('/', (req, res) => {
    res.send('SUCCESS')
})


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to DB')
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }).catch((err) => {
        console.log('err', err)
    });

