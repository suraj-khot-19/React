import React from 'react'; //imr

import PropTypes from 'prop-types'; //impt
//rfc ==> react function based component 
export default function Navbar(prop) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{prop.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{prop.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{prop.about}</a>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
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
