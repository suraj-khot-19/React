import { createContext } from 'react';
/*
The value you want the context to have when there is no matching Provider in the tree above the component reading the context. This is meant as a "last resort" fallback.
Lets you create a Context that components can provide or read.
*/
const NoteContext = createContext();
export default NoteContext;