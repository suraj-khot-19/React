import React from 'react'; //imr

import PropTypes from 'prop-types'; //impt
import { Link } from 'react-router-dom';
//rfc ==> react function based component 
export default function Navbar(prop) {
    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${prop.theme === 'light' ? 'dark' : 'light'}`} data-bs-theme={prop.theme}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{prop.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{prop.home}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{prop.about}</Link>
                        </li>

                    </ul>
                    <div className="d-flex" >
                        <div className="bg-primary rounded mx-2" onClick={() => { prop.mode('primary') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                        <div className="bg-secondary rounded mx-2" onClick={() => { prop.mode('secondary') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                        <div className="bg-success rounded mx-2" onClick={() => { prop.mode('success') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                        <div className="bg-info rounded mx-2" onClick={() => { prop.mode('info') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                        <div className="bg-danger rounded mx-2" onClick={() => { prop.mode('danger') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                        <div className="bg-warning rounded mx-2" onClick={() => { prop.mode('warning') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                    </div>

                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={prop.mode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${prop.theme === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault" >{prop.theme === 'light' ? 'Enable DarkMode' : 'Enable LightMode'}</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes =
{
    title: PropTypes.string.isRequired,//pts
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
}
//!no longer used in new version
//setting default propes which will pint when we forgot to pass props
// Navbar.defaultProps = {
//     title: "TextUtils",
//     home: "Home",
//     about: "About"
// }
