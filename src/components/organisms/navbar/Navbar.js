import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/plyos-logo.svg';
import "./Navbar.css";

export const Navbar = () => {

    const getElements = () => {
        const icon = document.getElementById("hamburger-menu-container");
        const header = document.getElementById("nav-header");
        const ul = document.getElementById("nav-bar");
        const classList = icon.className.split(" ");
        return (
            [icon, header, ul, classList]
        );
    };

    const openOrCloseNav = () => {
        const [icon, header, ul, classList] = getElements();
        classList.includes("active-menu") 
        ? icon.classList.remove("active-menu") || header.classList.remove("active-menu") || ul.classList.remove("active-menu")
        : icon.classList.add("active-menu") || header.classList.add("active-menu") || ul.classList.add("active-menu");
    };

    const closeNav = () => {
        const [icon, header, ul, classList] = getElements();
        if (classList.includes("active-menu")) {
            icon.classList.remove("active-menu") || header.classList.remove("active-menu") || ul.classList.remove("active-menu")
        }; 
    };

    return (
        <Fragment>
            <header id="nav-header">
                <Link to="/">
                    <img onClick={closeNav} src={logo} alt="Plyos-logo"/>
                </Link>
                <div id="hamburger-menu-container" className="hamburger-menu-container" onClick={openOrCloseNav}>
                    <div className="hamburger-menu"></div>
                </div>
            </header>
            <nav id="nav-bar">
                <ul>
                    <li onClick={openOrCloseNav}><Link className="link" to="/exercises">Exercises</Link></li>
                    <li onClick={openOrCloseNav}><Link className="link" to="/mytraining">MyTraining</Link></li>
                    <li onClick={openOrCloseNav}><Link className="link" to="/blogs">Blogs</Link></li>
                    <li onClick={openOrCloseNav}><Link className="link" to="/profile">Profile</Link></li>
                    <li onClick={openOrCloseNav}><Link className="link" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </Fragment>
    );
};