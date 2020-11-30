import React from 'react';
import { Link } from 'react-router-dom'

function Nav({ logout, isAuthenticated }) {
    return (
        <nav>
            {
                isAuthenticated ?
                    <ul className="nav-links">
                        <Link className="home" to="/">
                            <li>to do list</li>
                        </Link>
                        <div className="logout-container">
                            <button className="logout-button" title="Logout" onClick={logout}>
                                logout
                    </button>
                        </div>
                    </ul>
                    :
                    <ul className="nav-link">
                        <Link className="home" to="/">
                            <li>to do list</li>
                        </Link>
                    </ul>
            }
        </nav >
    );
}

export default Nav;
