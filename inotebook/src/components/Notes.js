
import React, { useContext } from 'react';
import NoteContext from '../context/note/NoteContext';
import NotesItems from './NotesItems';
function Notes() {
    // Accepts a context object (the value returned from React.createContext) and returns the current context value, as given by the nearest context provider for the given context.
    const context = useContext(NoteContext);
    // desrtucturing the context
    // eslint-disable-next-line 
    const { state, setstate } = context;
    return (
        <>
            <div className="row">
                {state.map((note) => {
                    return <NotesItems key={note._id} title={note.title} desciption={note.desciption} />
                })}
            </div>
        </>
    )
}

export default Notes