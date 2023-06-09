import React from 'react';
//import { GiHamburgerMenu } from 'react-icons/gi';


import './Navbar.css';

const Navbar = () => (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src="./img/logo.png" alt="app logo" />
        </div>
    <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a> </li>
        <li className="p__opensans"><a href="#about">About</a> </li>
        <li className="p__opensans"><a href="#places">Places</a> </li>
        <li className="p__opensans"><a href="#feedback">Feedback</a> </li>
    </ul>

    <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Login / Register</a>
        <div />

        <a href="/" className="p__opensans">Add Your Paradise </a>
    </div>
    </nav>
);

export default Navbar;