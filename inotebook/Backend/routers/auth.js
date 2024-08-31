const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { validationResult, body } = require('express-validator');

router.post(
    '/',
    [
        body('name', 'Enter a valid name').isLength({ min: 2 }),
        body('password', 'password must be at least 5 char').isLength({ min: 5 }),
        body('email', 'enter valid email').isEmail(),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        }).then(user => res.json(user)).catch(err => res.json({ error: 'This email is already exists in database', msg: err.message }))
    });

module.exports = router;