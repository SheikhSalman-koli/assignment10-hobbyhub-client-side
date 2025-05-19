import React from 'react';
import { NavLink } from 'react-router';
import './nav.css'

const Nav = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/signin'>Signin</NavLink>
            <NavLink to='/signup'>Signup</NavLink>
        </div>
    );
};

export default Nav;