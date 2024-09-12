// eslint-disable-next-line
import Alert from '../../components/Alert';
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
        let allNote = [];
        // server side
        try {
            const response = await fetch(`${iNotebook}/notes/getnote`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGFhYzY4ODJmMThmNGZiMmRlYmQ4MyIsImlhdCI6MTcyNTYwNzAxNn0.sab8ZFll5Www79vmNjYzggs80m1_U6AzVof0ICKD9sw",
                },
            });
            allNote = await response.json();
        } catch (error) {
            document.body.innerHTML = `<h3 style='color:red;text-align:center;'>Server Error please try after some time<br>${error.message}</h3>`;
        }
        finally {
            setNote(allNote);
        }
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
        // we will receive note from response
        const newNote = await response.json();
        
        // client side 
        setNote(note.concat(newNote));
    }

    //! fun to delete a note
    const deleteNote = async (id) => {
        // server side
        const response = await fetch(`${iNotebook}/notes/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGFhYzY4ODJmMThmNGZiMmRlYmQ4MyIsImlhdCI6MTcyNTYwNzAxNn0.sab8ZFll5Www79vmNjYzggs80m1_U6AzVof0ICKD9sw",
            },
        });

        // client side
        // removing note with id
        const newNote = note.filter((e) => {
            return e._id !== id
        });
        // update note
        setNote(newNote);
    }

    //! fun to update a note
    // new not with current note and converting array into json
    let newNote = JSON.parse(JSON.stringify(note));

    const updateNote = async (id, title, desciption, tag) => {
        // server side
        const response = await fetch(`${iNotebook}/notes/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGFhYzY4ODJmMThmNGZiMmRlYmQ4MyIsImlhdCI6MTcyNTYwNzAxNn0.sab8ZFll5Www79vmNjYzggs80m1_U6AzVof0ICKD9sw",
            },
            body: JSON.stringify({ title, desciption, tag }),
        });

        // client side 
        for (let i = 0; i < newNote.length; i++) {
            if (note[i]._id === id) {
                newNote[i].title = title;
                newNote[i].desciption = desciption;
                newNote[i].tag = tag;
                break;
            }
        }
        setNote(newNote);
    }

    return (
        <NoteContext.Provider value={{ note, addNote, deleteNote, fetchNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    );
}
export default NoteState;