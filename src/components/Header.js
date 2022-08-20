import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'

const Header = () => {
    return (
        <div>
        <h2>This is home page. for context api </h2>
        <nav>
            <Link to="/home">home</Link>
            <Link to="/revew">Revew</Link>
            </nav>
        </div>
    );
};

export default Header;