const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    time: {
        type: Date,
        default: Date.now
    },
});
const User = mongoose.model('user', userSchema);
User.createIndexes();
module.exports = User;