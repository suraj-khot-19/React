
import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/note/NoteContext';
import NotesItems from './NotesItems';
function Notes() {
    // Accepts a context object (the value returned from React.createContext) and returns the current context value, as given by the nearest context provider for the given context.
    const context = useContext(NoteContext);

    // desrtucturing the context
    const { note, fetchNote } = context;

    // first time when load fetch notes
    useEffect(() => {
        // calling fetch note from noteState and render only once
        fetchNote();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="row">
                {note.map((e) => {
                    return <NotesItems key={e._id} note={e} />
                })}
            </div>
        </>
    )
}

export default Notes