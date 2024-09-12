import NoteContext from './NoteContext'
import { useState } from 'react';
const iNotebook = 'http://localhost:5000';
const NoteState = (props) => {
    //! initial state
    const notes = []

    // use state snippet
    const [note, setNote] = useState(notes);

    //! fun to fetch note
    const fetchNote = async () => {
        // server side
        const response = await fetch(`${iNotebook}/notes/getnote`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGFhYzY4ODJmMThmNGZiMmRlYmQ4MyIsImlhdCI6MTcyNTYwNzAxNn0.sab8ZFll5Www79vmNjYzggs80m1_U6AzVof0ICKD9sw",
            },
        });
        const allNote = await response.json();
        setNote(allNote);
    }

    //! fun to add a new note
    const addNote = async (title, desciption, tag) => {
        // server side
        const response = await fetch(`${iNotebook}/notes/createnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGFhYzY4ODJmMThmNGZiMmRlYmQ4MyIsImlhdCI6MTcyNTYwNzAxNn0.sab8ZFll5Www79vmNjYzggs80m1_U6AzVof0ICKD9sw",
            },
            body: JSON.stringify({ title, desciption, tag }),
        });
        console.log("add note" + response.status);

        // client side 
        const newNote = {
            "_id": "66e0007ebc78e9bc1a3eadd6",
            "user": "66daac6882f18f4fb2debd83",
            "title": title,
            "desciption": desciption,
            "tag": tag,
            "time": "2024-09-10T08:17:02.809Z",
            "__v": 0
        }
        setNote(note.concat(newNote));
    }

    //! fun to delete a note
    const deleteNote = (id) => {
        // removing note with id
        const newNote = note.filter((e) => {
            return e._id !== id
        });
        // update note
        setNote(newNote);
    }

    return (
        <NoteContext.Provider value={{ note, addNote, deleteNote, fetchNote }}>
            {props.children}
        </NoteContext.Provider>
    );
}
export default NoteState;