import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(props) {
    // navigate
    let navigate = useNavigate();

    // email pass
    const [user, setuser] = useState({ email: '', password: '' });

    // on change feilds
    const handleOnChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }

    // api call
    const login = async (e) => {
        // do not reload
        e.preventDefault();
        // api call
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
        });
        const data = await response.json();

        // and if status code is 200 then redirect to home and store auth token
        if (data.sucess) {
            // now storing auth token to data storage
            localStorage.setItem('auth-token', data.authToken);
            navigate('/');
            // show alert
            props.setalert('Logged in sucessfully!', 'success')
            // also save user details
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        else {
            // show alert
            props.setalert('Invalid credintials!', 'danger')
        }
    }
    return (
        <>
            <div className="container my-2">
                <h3 className='text-center'>Login To Continue With I-NoteBook</h3>
                {/* form */}
                <div className='border rounded d-flex justify-content-center'>
                    <form onSubmit={login}>
                        {/* email */}
                        <div className="mb-3 mt-4">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name='email' value={user.email} aria-describedby="emailHelp" onChange={handleOnChange} placeholder='rowdy@gmail.com' />
                        </div>
                        {/* password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="text" className="form-control" id="password" name='password' value={user.password} aria-describedby="titleHelp" onChange={handleOnChange} />
                        </div>
                        {/* btn */}
                        <button disabled={user.email.length === 0 || user.password.length === 0} type="submit" className="btn btn-primary my-3">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login