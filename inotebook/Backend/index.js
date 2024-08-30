const express = require('express');
const connectToMongoose = require('./db');

const app = express();
const port = 3000;

connectToMongoose();
app.get('/', () => {
    console.log("hello");
})
app.listen(port, () => {
    console.log(`app is listning at port http://localhost:${port}`)
});