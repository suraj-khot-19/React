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

//!     create note
router.post(
    // url
    '/createnote',
    // middleware
    getUserData,
    // validating body's parameters
    [
        body('title', 'title at least 2 char').isLength({ min: 2 }),
        body('desciption', 'description at least 5 char').isLength({ min: 5 }),
    ],
    // fn
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
            res.send({ note: saved })
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    });

// !    update note
router.put(
    // url
    '/update/:id',
    // middleware
    getUserData,
    // fn
    async (req, res) => {
        // getting uid from middleware
        const uid = req.userId;

        // destucture body
        const { title, desciption, tag } = req.body;

        try {
            // new note
            let newNote = {};
            if (title) { newNote.title = title; }
            if (desciption) { newNote.desciption = desciption; }
            if (tag) { newNote.tag = tag; }

            // find note by its id
            let note = await Notes.findById(req.params.id);

            // if note not found
            if (!note) {
                return res.status(404).send({ error: "Note not found" });
            }

            // if user in note is not equal to requested user
            if (note.user.toString() != uid) {
                return res.status(401).send({ error: "not valid user" });
            }

            // update note
            note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
            res.send(newNote);
        }
        catch (error) {
            return res.status(500).send({ error: "Internal server error" });
        }
    });

module.exports = router;