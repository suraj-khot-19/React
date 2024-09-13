// updateNote({ id: currentState._id, title: currentState.etitle, description: currentState.edescription, tag: currentState.etag })
import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/note/NoteContext';
import NotesItems from './NotesItems';
import { useNavigate } from 'react-router-dom';
function Notes(props) {
    //! create state for note to be edited
    const [newNote, setnewNote] = useState({ id: '', etitle: '', edesciption: '', etag: '' });

    //!   Accepts a context object
    const context = useContext(NoteContext);

    //!   desrtucturing the context
    const { note, fetchNote, updateNote } = context;

    //!   first time when load fetch notes
    //? navigater to navigate when no auth token
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('auth-token') !== null) {
            // calling fetch note from noteState and render only once
            fetchNote();
        }
        else {
            navigate('/login');
        }
    });

    //!   fun to handel a click on edit btn
    // use ref .... handel click on edit
    const editBtn = useRef('');
    const closeUpdate = useRef('');

    // send this function as props to note_item and accept a current note from it
    const updateNoteClient = (currentNote) => {
        //! use ref .... handel click on edit
        editBtn.current.click();
        // update note with currentnote when click on modal(do not forgot names)
        setnewNote({ id: currentNote._id, etitle: currentNote.title, etag: currentNote.tag, edesciption: currentNote.desciption });
    }

    //! on change input feilds
    const handleOnChange = (e) => {
        // update note which is types
        setnewNote({ ...newNote, [e.target.name]: e.target.value })
    }

    // ! handel edit btn
    const handelEditButton = () => {
        updateNote(newNote.id, newNote.etitle, newNote.edesciption, newNote.etag);
        // set alert
        props.setalert({ msg: 'Note updated sucessfully', type: 'success' });
        // close window
        closeUpdate.current.click();
    }
    return (
        <>
            {/* btn to launch modal */}  {/*! adding ref to it */}
            <button ref={editBtn} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* form */}
                            <form>
                                {/* title */}
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Note title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={newNote.etitle} aria-describedby="titleHelp" onChange={handleOnChange} minLength={3} required />
                                </div>
                                {/* description */}
                                <div className="mb-3">
                                    <label htmlFor="desciption" className="form-label">description</label>
                                    <input type="text" className="form-control" id="edesciption" name='edesciption' value={newNote.edesciption} onChange={handleOnChange} minLength={5} required />
                                </div>
                                {/* tag */}
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={newNote.etag} onChange={handleOnChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeUpdate}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handelEditButton} >Update</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* display notes using map */}
            <div className="row">
                {note.map((e) => {
                    return <NotesItems key={e._id} note={e} updateNoteClient={updateNoteClient} setalert={props.setalert} />
                })
                }
            </div>
        </>
    )
}

export default Notes