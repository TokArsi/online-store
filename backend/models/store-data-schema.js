import mongoose from "mongoose";

const Schema = mongoose.Schema;
const StoreDataScheme = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})
//Создание модели на основе схемы
const StoreData= mongoose.model('storecollections', StoreDataScheme);
export default StoreData