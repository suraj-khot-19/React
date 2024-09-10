
import React, { useContext } from 'react';
import NoteContext from '../context/note/NoteContext';
import NotesItems from './NotesItems';
function Notes() {
    // Accepts a context object (the value returned from React.createContext) and returns the current context value, as given by the nearest context provider for the given context.
    const context = useContext(NoteContext);
    // desrtucturing the context
    const { note } = context;
    return (
        <>
            <div className="row">
                {note.map((e) => {
                    return <NotesItems key={e._id} title={e.title} desciption={e.desciption} />
                })}
            </div>
        </>
    )
}

export default Notes