const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', (req, res) => {
    const request = req.body;
    const user = User(request);
    user.save();
    res.send(request);
});

module.exports = router;