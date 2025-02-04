import express from "express"
import * as path from "path"
import cors from 'cors'
import mongoose from "mongoose";
import StoreData from './models/store-data-schema.js'
import * as bodyParser from "express";
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3002;
const app = express();
const db = process.env.MONGODB_URI;
mongoose.set('strictQuery', false);



app.use('/images', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb', extended: false}));
app.use(cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
}));

mongoose
    .connect(db, )
    .then (() => console.log('Connected to DB'))
    .catch((error) => console.log(error))



app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});


app.get('/store-data', async (req, res) => {
    try {
        const result = await StoreData.find();

        console.log("Данные из MongoDB:", result);

        const formattedResult = result?.map(({ _id, id, title, price, image, category }) => ({
            _id, id, title, price, image, category
        }));

        console.log("Отправляем клиенту:", formattedResult);

        res.json(formattedResult);
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

app.put('/update-images', async (req, res) => {
    try {
        const documents = await StoreData.find({ image: { $regex: '3002' } });

        for (let doc of documents) {
            doc.image = doc.image.replace('3002', '5000');
            await doc.save();
        }

        console.log("Обновлено документов:", documents.length);
        res.json({ message: "Поля image успешно обновлены", updatedCount: documents.length });
    } catch (error) {
        console.error("Ошибка при обновлении данных:", error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});









