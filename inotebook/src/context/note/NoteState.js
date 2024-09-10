import NoteContext from './NoteContext'
import { useState } from 'react';

const NoteState = (props) => {
    // initial state
    const note = [
        {
            "_id": "66e0007ebc78e9bc1a3eadd6",
            "user": "66daac6882f18f4fb2debd83",
            "title": "gym",
            "desciption": "8 am gym",
            "tag": "workout",
            "time": "2024-09-10T08:17:02.809Z",
            "__v": 0
        },
        {
            "_id": "66e0007fbc78e9bc1a3eadd8",
            "user": "66daac6882f18f4fb2debd83",
            "title": "gym",
            "desciption": "8 am gym",
            "tag": "workout",
            "time": "2024-09-10T08:17:03.013Z",
            "__v": 0
        },
        {
            "_id": "66e0007fbc78e9bc1a3eade0",
            "user": "66daac6882f18f4fb2debd83",
            "title": "gym",
            "desciption": "8 am gym",
            "tag": "workout",
            "time": "2024-09-10T08:17:03.728Z",
            "__v": 0
        },
        {
            "_id": "66e0007fbc78e9bc1a3eade2",
            "user": "66daac6882f18f4fb2debd83",
            "title": "gym",
            "desciption": "8 am gym",
            "tag": "workout",
            "time": "2024-09-10T08:17:03.900Z",
            "__v": 0
        },
        {
            "_id": "66e00080bc78e9bc1a3eade4",
            "user": "66daac6882f18f4fb2debd83",
            "title": "gym",
            "desciption": "8 am gym",
            "tag": "workout",
            "time": "2024-09-10T08:17:04.072Z",
            "__v": 0
        },
        {
            "_id": "66e00080bc78e9bc1a3eade6",
            "user": "66daac6882f18f4fb2debd83",
            "title": "gym",
            "desciption": "8 am gym",
            "tag": "workout",
            "time": "2024-09-10T08:17:04.241Z",
            "__v": 0
        },
    ]
    // use state snippet
    const [state, setstate] = useState(note);

    return (
        <NoteContext.Provider value={{ state, setstate }}>
            {props.children}
        </NoteContext.Provider>
    );
}
export default NoteState;