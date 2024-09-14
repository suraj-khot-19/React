import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/note/NoteContext';

function UserDetails() {
    const context = useContext(NoteContext);
    const { note, fetchNote } = context;

    useEffect(() => {
        fetchNote();
        // eslint-disable-next-line
    }, [])


    // Retrieve and parse user details from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            <div className="container text-center">
                <h2>Hii, {user.name}</h2>
                <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <td>{user.name}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col">Email</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th scope="col">Joined at</th>
                            <td>{new Date(user.time).toGMTString()}</td>
                        </tr>
                        <tr>
                            <th scope="col">total notes created</th>
                            <td>{note.length}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserDetails;