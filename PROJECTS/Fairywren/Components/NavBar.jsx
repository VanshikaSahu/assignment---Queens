import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export const NavBar = () => {
    return(
        <>
        <div className="container-fluid nav-bg">
            <div className = 'row'>
                <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-md navbar-light bg-light p-2">
    <a href="#" className="navbar-brand">
        <b className = "headingg"> Fairywren</b>
        <br/>
        <div>Your skin our responsibility</div>
    </a>
    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav">
            <NavLink to="/" className="nav-item nav-link active">HOME</NavLink>
            <NavLink to="/Shop" className="nav-item nav-link">SHOP</NavLink>
            <NavLink to="/Services" className="nav-item nav-link">SERVICES</NavLink>
            <NavLink to="/Contact" className="nav-item nav-link">CONTACT</NavLink>
        </div>
        
       <img alt="Instagram - Black Circle" src="https://static.wixstatic.com/media/e1aa082f7c0747168d9cf43e77046142.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/e1aa082f7c0747168d9cf43e77046142.webp" className = "img"></img> 
        <img alt="Twitter" src="https://static.wixstatic.com/media/870f97661ed14a5bb2d96ecbddec0aed.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/870f97661ed14a5bb2d96ecbddec0aed.webp" className = "img"></img>
        <img alt="Facebook" src="https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/4057345bcf57474b96976284050c00df.webp" className="img"></img>
        <div className="navbar-nav ml-auto">
            <a href="#" className="nav-item nav-link">Login</a>
        </div>
    </div>
</nav>
</div>
            </div>
        </div>
            
        </>
    )
}
