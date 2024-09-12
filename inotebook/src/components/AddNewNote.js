import React, { useState, useContext } from 'react'
import NoteContext from '../context/note/NoteContext';
function AddNewNote() {
    // getting context
    const context = useContext(NoteContext);

    // destructring context
    const { addNote } = context;

    // create state for note
    const [note, setnote] = useState({ title: '', desciption: '', tag: '' });

    // fun to add a note
    const addNewNote = (e) => {
        // do not refresh
        e.preventDefault();
        // send feilds to fun
        addNote(note.title, note.desciption, note.tag);
        setnote({ title: '', desciption: '', tag: '' });
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
                            {/* title */}
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Note title</label>
                                <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="titleHelp" onChange={handleOnChange} minLength={3} required />
                            </div>
                            {/* description */}
                            <div className="mb-3">
                                <label htmlFor="desciption" className="form-label">description</label>
                                <input type="text" className="form-control" id="desciption" name='desciption' value={note.desciption} onChange={handleOnChange} minLength={5} required />
                            </div>
                            {/* tag */}
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">tag</label>
                                <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={handleOnChange} />
                            </div>
                            {/* btn */}
                            <button disabled={note.title.length === 0 || note.desciption.length === 0} type="submit" onClick={addNewNote} className="btn btn-primary my-3 mx-4">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewNote