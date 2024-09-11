import React, { useContext } from 'react'
import NoteContext from '../context/note/NoteContext'

function NotesItems(props) {
    // props destructure
    const { title, desciption, _id } = props.note;

    // note context
    const context = useContext(NoteContext);

    // destucture
    const { deleteNote } = context;

    return (
        <>
            <div className="col-md-3 my-3">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex mb-3">
                            {/* title */}
                            <div className="me-auto p-2"> <h5 className="card-title" >{title}</h5></div>
                            {/* edit */}
                            <div className="p-2"> <i className="fa-solid fa-pen-to-square pe-auto" role='button'></i></div>
                            {/* delete */}
                            <div className="p-2 "> <i className="fa-solid fa-trash-can" role='button' onClick={() => deleteNote(_id)}></i></div>
                        </div>
                        {/* desciption */}
                        <p className="card-text">{desciption}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesItems