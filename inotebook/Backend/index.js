const express = require('express');
const connectToMongoose = require('./db');

// npm install cors
var cors = require('cors');

const app = express();
const port = 5000;

// Configures the Access-Control-Allow-Origin CORS header.
app.use(cors({
    origin: 'http://localhost:3000'
}));


// middleware for accept json
app.use(express.json());

connectToMongoose();

// routers
app.use('/auth', require('./routers/auth'));
app.use('/notes', require('./routers/notes'));

app.listen(port, () => {
    console.log(`app is listning at port http://localhost:${port}`)
});