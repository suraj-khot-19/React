import React, { useState } from 'react';
import AlertContext from './AlertContext';

const AlertState = (props) => {
    const s1 = "hii";
    const [alert, setalert] = useState(s1)
    return (
        <AlertContext.Provider value={{ alert, setalert }}>
            {props.childern}
        </AlertContext.Provider>
    );
}
export default AlertState;