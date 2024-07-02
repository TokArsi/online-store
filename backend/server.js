import express from "express"
import * as path from "path"
import cors from 'cors'
import mongoose from "mongoose";
import StoreData from './models/store-data-schema.js'
import * as bodyParser from "express";
import 'dotenv/config'

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
}

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3002;
const app = express();
const db = process.env.MONGODB_URI;
mongoose.set('strictQuery', false);



app.use('/images', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb', extended: false}));
app.use(cors(corsOptions));
app.use(cors());

mongoose
    .connect(db, )
    .then (() => console.log('Connected to DB'))
    .catch((error) => console.log(error))



app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});


app.get('/store-data', (req, res) => {

    StoreData.find()
        .then((result) => result.map(({_id, id, title, price, image, category}) => {
            return {_id, id, title, price, image, category}
        }))
        .then((result) => res.json(result))
        .catch((error) => console.log(error))
});







