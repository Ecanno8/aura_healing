import React from "react";
import "../styles/Navbar.css";

export default function Navbar({ brand }) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">{brand}</div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
            </ul>
        </nav>
    );
}