import React, { useState, useContext } from 'react'
import NoteContext from '../context/note/NoteContext';
function AddNewNote() {
    // getting context
    const context = useContext(NoteContext);

    // destructring context
    const { addNote } = context;

    // create state for note
    const [note, setnote] = useState({ title: '', desciption: '', tag: 'default' });

    // fun to add a note
    const addNewNote = (e) => {
        // do not refresh
        e.preventDefault();
        // send feilds to fun
        addNote(note.title, note.desciption, note.tag);
    }

    // on change input feilds
    const handleOnChange = (e) => {
        // update note which is types
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container my-4">
                <div className="container">
                    <h2>Create a Note</h2>
                    <div className='container'>
                        {/* form */}
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Note title</label>
                                <input type="text" className="form-control" id="title" name='title' aria-describedby="titleHelp" onChange={handleOnChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desciption" className="form-label">description</label>
                                <input type="text" className="form-control" id="desciption" name='desciption' onChange={handleOnChange} />
                            </div>
                            <button type="submit" onClick={addNewNote} className="btn btn-primary my-3 mx-4">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewNote