import React from 'react'

function NotesItems(props) {
    return (
        <>
            <div className="col-md-3 my-3">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex mb-3">
                            {/* title */}
                            <div className="me-auto p-2"> <h5 className="card-title">{props.title}</h5></div>
                            {/* edit */}
                            {/* <div className="p-2"> <i className="fa-solid fa-pen-to-square"></i></div> */}
                            {/* delete */}
                            {/* <div className="p-2"> <i className="fa-solid fa-trash-can"></i></div> */}
                        </div>
                        {/* desciption */}
                        <p className="card-text">{props.desciption}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesItems