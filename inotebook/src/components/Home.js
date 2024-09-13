import React from 'react'
import Notes from './Notes';
import AddNewNote from './AddNewNote';

export default function Home(props) {
    return (
        <>
            {/* add note */}
            <AddNewNote setalert={props.setalert} />
            {/* all notes */}
            <div className="container my-3">
                <h2>Your Notes</h2>
                <Notes setalert={props.setalert} />
            </div>

        </>
    )
}
