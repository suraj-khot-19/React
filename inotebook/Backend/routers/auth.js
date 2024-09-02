const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { validationResult, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const getUserData = require('../middleware/getuser');
const JWT_SecureStr = "ILovePrograming";

//! register user
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
            // if not exists 400
            if (user) {
                return res.status(400).send("user with this email already exists in our database")
            }
            // else create new user
            // securing pass
            // create a salt 
            var salt = bcrypt.genSaltSync(10);
            // use bcrypt
            let securePassword = bcrypt.hashSync(req.body.password, salt);
            user = await User.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email
            });
            // sending jwt token=user id+secure code
            let uid = {
                id: user.id
            }
            var authToken = jwt.sign(uid, JWT_SecureStr);
            res.send({ authToken });

        } catch (error) {
            res.status(500).send("Some error is occured!");
        }
    });

//! login user
router.post(
    // url
    '/login',
    // validating body's parameters
    [
        body('password', 'password cannot be blank').exists(),
        body('email', 'enter valid email').isEmail(),
    ],
    // callback
    async (req, res) => {
        // Extracts the validation errors of an express request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // destructuring from request 
        const { email, password } = req.body;
        try {
            // checking wheter user exists
            let user = await User.findOne({ email });
            // if not exists 400
            if (!user) {
                return res.status(400).json({ error: "please enter correct credintials!" });
            }

            // checking req pass with hash stored in db
            let checkPass = await bcrypt.compare(password, user.password);
            // if password is incorrect
            if (!checkPass) {
                return res.status(400).json({ error: "please enter correct credintials!" });
            }

            // else sending jwt token=user id+secure code
            let uid = {
                id: user.id,
            }
            var authToken = jwt.sign(uid, JWT_SecureStr);
            res.json({ authToken });
        } catch (error) {
            res.status(500).send("Some error is occured!");
        }

    });

// !get user data
router.post('/getuser', getUserData, async (req, res) => {
    try {
        // getting user id from middleware
        let uid = req.userId;
        // find the user by its id and send data except password
        let data = await User.findById(uid).select('-password');
        res.send(data);
    } catch (error) {
        res.status(500).send("Some error is occured!");
    }
});

module.exports = router;