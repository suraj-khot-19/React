import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup(props) {
    // navigator
    let navigate = useNavigate();

    // state
    const [user, setuser] = useState({ name: '', email: '', password: '', cpassword: '' });

    // handling feild change
    const handleOnChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }

    // api call
    const signup = async (e) => {
        // do not reload
        e.preventDefault();

        // show alert if password not match
        const { password, cpassword } = user;
        if (password !== cpassword) {
            props.setalert({ msg: 'Password does not match!', type: 'danger' });
        }
        else {

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
            if (data.sucess) {
                navigate('/login');
            }

            // show alert
            data.sucess ? props.setalert({ msg: 'Sign up sucessfully!', type: 'success' }) : props.setalert({ msg: 'Some error occured!', type: 'danger' });
        }
    }
    return (
        <>
            <div className="container my-2">
                {/* form */}
                <form onSubmit={signup}>
                    {/* name */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' value={user.name} aria-describedby="emailHelp" onChange={handleOnChange} minLength={2} required />
                    </div>
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name='email' value={user.email} aria-describedby="emailHelp" onChange={handleOnChange} minLength={5} required />
                    </div>
                    {/* password */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" name='password' value={user.password} aria-describedby="titleHelp" onChange={handleOnChange} minLength={5} required />
                    </div>
                    {/*confirm password */}
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="text" className="form-control" id="cpassword" name='cpassword' value={user.cpassword} aria-describedby="titleHelp" onChange={handleOnChange} minLength={5} required />
                    </div>
                    {/* btn */}
                    <button type="submit" className="btn btn-primary my-3 mx-4">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default Signup