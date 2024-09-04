const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');
const notesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,//linking user model using foregn key
        ref: 'user',
    },
    title: {
        type: String,
        required: true,
    },
    desciption: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "general",
    },
    time: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('notes', notesSchema);