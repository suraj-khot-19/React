import NoteContext from './NoteContext'
import { useState } from 'react';

const NoteState = (props) => {
    // initial state
    const s1 = {
        "name": "suraj",
        "sirname": "khot"
    }

    // use state snippet
    const [state, setstate] = useState(s1);

    // fun which update state
    const update = () => {
        setTimeout(() => {
            setstate({ "name": "rowdy" })
        }, 3000);
    }

    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    );
}
export default NoteState;