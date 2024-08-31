const express = require('express');
const connectToMongoose = require('./db');

const app = express();
const port = 3000;

// middleware for accept json
app.use(express.json());

connectToMongoose();

// routers
app.use('/api/auth', require('./routers/auth'));
app.use('/api/notes', require('./routers/notes'));

app.listen(port, () => {
    console.log(`app is listning at port http://localhost:${port}`)
});