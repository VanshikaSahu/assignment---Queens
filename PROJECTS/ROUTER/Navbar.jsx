import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () =>
{
    return(
        <>
        <div className = "container">
            <NavLink exact activeClassName = "active_class" to = "/">About</NavLink>
            <NavLink exact activeClassName = "active_class" to = "/contact"> Contact</NavLink>
            <NavLink exact activeClassName = "active_class" to = "/service">Services</NavLink>
            <NavLink exact activeClassName = "active_class" to = "/user/Vanshika/sahu">Users</NavLink>
            <NavLink exact activeClassName = "active_class" to = "/search">Search</NavLink>
        </div>
        </>
    );
}

export default Navbar;