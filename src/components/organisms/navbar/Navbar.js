import React, { Fragment } from 'react';
import logo from '../../assets/plyos-logo.svg';
import "./Navbar.css";

export const Navbar = () => {
    <Fragment>
        <header id="nav-header">
            <img src={logo} alt="Plyos-logo"/>
            <div id="hamburger-menu-container" className="hamburger-menu-container" onClick={() => {
                const icon = document.getElementById("hamburger-menu-container");
                const header = document.getElementById("nav-header");
                const ul = document.getElementById("nav-links");
                const classList = icon.className.split(" ");
                classList.includes("active-menu") 
                ? icon.classList.remove("active-menu") || header.classList.remove("active-menu") || ul.classList.remove("active-menu")
                : icon.classList.add("active-menu") || header.classList.add("active-menu") || ul.classList.add("active-menu");
                }} >
                <div className="hamburger-menu"></div>
            </div>
        </header>
        <nav>
            <ul id="nav-links">
                <li><a href="#">Exercises</a></li>
                <li><a href="#">MyTraining</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </Fragment>
};