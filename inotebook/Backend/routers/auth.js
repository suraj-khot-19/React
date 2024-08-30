const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    obj = {
        name: 'suraj',
        sname: 'khot',
    }
    res.send(obj);
});

module.exports = router;