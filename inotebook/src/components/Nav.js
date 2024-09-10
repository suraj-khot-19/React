import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
    // Returns the current location object, which represents the current URL in web browsers.
    let location = useLocation();
    useEffect(() => {
        //this will auto. track the change in route
    }, [location])

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
                </div>
            </nav>
        </>
    )
}
