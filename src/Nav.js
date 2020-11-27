import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link className="home" to="/">
                    <li>to do list</li>
                </Link>

                <Link className="logout" to="/shop">
                    <li>logout</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
