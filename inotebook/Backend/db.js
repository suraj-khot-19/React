const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/";

const connectToMongoose = () => {
    mongoose.connect(url).then(() => {
        console.log("connected to mangoose successfuly!");
    }).catch((err) => console.log(err));
}
module.exports = connectToMongoose;