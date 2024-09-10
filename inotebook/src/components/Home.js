import React from 'react'
import Notes from './Notes';
import AddNewNote from './AddNewNote';

export default function Home() {
    return (
        <>
            {/* add note */}
            <AddNewNote />
            {/* all notes */}
            <div className="container my-3">
                <h2>Your Notes</h2>
                <Notes />
            </div>

        </>
    )
}
