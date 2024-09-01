const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { validationResult, body } = require('express-validator');

router.post(
    // url
    '/user',
    // validating body's parameters
    [
        body('name', 'Enter a valid name').isLength({ min: 2 }),
        body('password', 'password must be at least 5 char').isLength({ min: 5 }),
        body('email', 'enter valid email').isEmail(),
    ],
    // callback
    async (req, res) => {
        // Extracts the validation errors of an express request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        try {
            // checking wheter email exists
            let user = await User.findOne({ email: req.body.email });
            // if exists 400
            if (user) {
                res.status(400).send("user with this email already exists in our database")
            }
            // else create new user
            else {
                user = await User.create({
                    name: req.body.name,
                    password: req.body.password,
                    email: req.body.email
                });
                // send user as res
                res.send(user);
            }
        } catch (error) {
            res.status(500).send("Some error is occured!");
        }
    });

module.exports = router;