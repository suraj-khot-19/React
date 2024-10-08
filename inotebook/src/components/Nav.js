import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Nav() {
    // navigator
    let navigate = useNavigate();

    // logout
    const logout = () => {
        localStorage.removeItem('auth-token');
        navigate('/login');
    }

    // Returns the current location object, which represents the current URL in web browsers.
    let location = useLocation();
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-body-tertiary bg-dark' data-bs-theme='dark'>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">I - Notebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    {
                        localStorage.getItem('auth-token') === null ?
                            // if no token 
                            <div>
                                <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                                <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
                            </div>
                            // if have token
                            :
                            <div>
                                <Link className="btn btn-info mx-2" to="/user"><i className="fa-solid fa-user fs-3"></i></Link>
                                <button className="btn btn-primary mx-1" onClick={logout}>LogOut</button>
                            </div>
                    }
                </div>
            </nav>
        </>
    )
}
