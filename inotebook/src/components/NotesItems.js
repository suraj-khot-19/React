import React, { useContext, useState } from 'react'
import NoteContext from '../context/note/NoteContext'

function NotesItems(props) {
    // props destructure
    const { note, updateNoteClient } = props;

    // note context
    const context = useContext(NoteContext);

    // destucture context
    const { deleteNote } = context;

    // concat with dot
    const concatNoteWithDot = (word, len) => {
        return (word === 'default' || word.length === 0 || word.length < 15) ? word : len === 'small' ? word.slice(0, 15).concat('...') : word.slice(0, 35).concat('...');
    }

    // show to solo note
    const [show, setShow] = useState(false);
    const solo = () => {
        setShow(!show);
    }

    return (
        <>
            <div className="col-md-3 my-3" onDoubleClick={solo}>
                <div style={{ backgroundColor: ' rgba(23, 23, 23, 0.2)' }} className="card">
                    <div className="card-body" onClick={solo}>
                        <div className={show ? '' : 'd-flex mb-3'}>
                            {/* title */}
                            <div className="me-auto"> <h4 className="card-title" >{show ? `Title : ${note.title}` : concatNoteWithDot(note.title, 'small')}</h4></div>
                            {/* edit show when small*/}
                            {!show && <div className="p-2"> <i className="fa-solid fa-pen-to-square pe-auto" role='button' onClick={() => updateNoteClient(note)}></i></div>}
                            {/* delete show when small */}
                            {!show && <div className="p-2 "><i className="fa-solid fa-trash-can" role='button' onClick={() => {
                                deleteNote(note._id);
                                props.setalert('Note deleted successfully', 'success')
                            }}></i></div>}
                        </div>
                        {/* desciption */}
                        <p className="card-text">{show ? `Desciption : ${note.desciption}` : concatNoteWithDot(note.desciption, 'large')}</p>
                        {/* tag and time */}
                        <div className={show ? '' : "d-flex"}>
                            {/* tag */}
                            <p style={{ fontWeight: '500', fontStyle: 'italic' }} className="card-text mx-1 text-primary">{note.tag === 'default' ? '' : show ? `Tag : ${note.tag} ` : concatNoteWithDot(note.tag, 'small')}</p>
                            {/* time */}
                            <p style={{ fontWeight: '500', fontStyle: 'italic' }} className="card-text mx-1">{show ? `Created At - ${new Date(note.time).toDateString()}` : `- ${new Date(note.time).toDateString()}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesItems
