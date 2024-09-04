const express = require('express');
const getUserData = require('../middleware/getuser');
const Notes = require('../models/Notes');
const router = express.Router();
const { validationResult, body } = require('express-validator');

//! getting note
router.get('/getnote', getUserData, async (req, res) => {
    try {
        // get user id from middl. request
        const uid = req.userId;
        let note = await Notes.find({ user: uid });
        res.send(note);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

//! create note
router.post('/createnote', getUserData,
    // validating body's parameters
    [
        body('title', 'title at least 2 char').isLength({ min: 2 }),
        body('desciption', 'description at least 5 char').isLength({ min: 5 }),
    ],
    async (req, res) => {
        // Extracts the validation errors of an express request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        // if condition matches
        try {
            // get user id from middl. request
            const uid = req.userId;
            // destructuring req body
            const { title, desciption, tag } = req.body;
            // create
            let note = new Notes({
                title,
                desciption,
                tag,
                user: uid,
            });
            const saved = await note.save();
            res.send({ saved })
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    });

module.exports = router;