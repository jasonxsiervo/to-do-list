import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link className="home" to="/">
                    <li>Home</li>
                </Link>

                <Link to="/shop">
                    <li className="logout">Shop</li>
                </Link>

            </ul>
        </nav>
    );
}

export default Nav;
