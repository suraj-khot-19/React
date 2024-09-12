import React, { useContext } from 'react'
import NoteContext from '../context/note/NoteContext'

function NotesItems(props) {
    // props destructure
    const { note, updateNoteClient } = props;

    // note context
    const context = useContext(NoteContext);

    // destucture
    const { deleteNote } = context;

    // capitalize fun
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <>
            <div className="col-md-3 my-3">
                <div style={{ backgroundColor: ' rgba(23, 23, 23, 0.2)' }} className="card">
                    <div className="card-body">
                        <div className="d-flex mb-3">
                            {/* title */}
                            <div className="me-auto p-2"> <h3 className="card-title" >{capitalize(note.title)}</h3></div>
                            {/* edit */}
                            <div className="p-2"> <i className="fa-solid fa-pen-to-square pe-auto" role='button' onClick={() => updateNoteClient(note)}></i></div>
                            {/* delete */}
                            <div className="p-2 "> <i className="fa-solid fa-trash-can" role='button' onClick={() => deleteNote(note._id)}></i></div>
                        </div>
                        {/* desciption */}
                        <p className="card-text">{note.desciption}</p>
                        <div className="d-flex">
                            {/* tag */}
                            <p style={{ fontWeight: '500', fontStyle: 'italic' }} className="card-text mx-1 text-primary">{note.tag === 'default' ? '' : note.tag}</p>
                            {/* time */}
                            <p style={{ fontWeight: '500', fontStyle: 'italic' }} className="card-text mx-1"> - {new Date(note.time).toDateString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesItems