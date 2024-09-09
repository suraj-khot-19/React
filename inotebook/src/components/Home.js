import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/note/NoteContext';

export default function Home() {
    // Accepts a context object (the value returned from React.createContext) and returns the current context value, as given by the nearest context provider for the given context.
    const context = useContext(NoteContext);

    // check for update if updates reload it
    useEffect(() => {
        // calling update fun from notestate
        context.update();
        // eslint-disable-next-line 
    }, []);

    return (
        <div>
            <p>hi {context.state.name} {context.state.sirname}</p>
        </div>
    )
}
