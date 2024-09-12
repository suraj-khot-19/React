import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    // navigator
    let navigate = useNavigate();

    // state
    const [user, setuser] = useState({ name: '', email: '', password: '' });

    // handling feild change
    const handleOnChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }

    // api call
    const signup = async (e) => {
        // do not reload
        e.preventDefault();

        // api call
        const response = await fetch('http://localhost:5000/auth/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password
            })
        });
        const data = await response.json();

        // navigate if sucess code is 200
        data.sucess && navigate('/login');
    }
    return (
        <>
            <div className="container content-center">
                {/* form */}
                <form onSubmit={signup}>
                    {/* name */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' value={user.name} aria-describedby="emailHelp" onChange={handleOnChange} />
                    </div>
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" name='email' value={user.email} aria-describedby="emailHelp" onChange={handleOnChange} />
                    </div>
                    {/* password */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" name='password' value={user.password} aria-describedby="titleHelp" onChange={handleOnChange} />
                    </div>
                    {/* btn */}
                    <button disabled={user.name.length < 2 || user.email.length < 6 || user.password.length < 6} type="submit" className="btn btn-primary my-3 mx-4">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default Signup