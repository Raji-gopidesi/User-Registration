// src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">Logo</div>
//             <ul className="navbar-links">
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/register">Register</Link></li>
//                 <li><Link to="/about">About</Link></li>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;
// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">MyAppLogo</div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`navbar-links ${isOpen ? 'navbar-links-open' : ''}`}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/register" onClick={toggleMenu}>Register</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;


