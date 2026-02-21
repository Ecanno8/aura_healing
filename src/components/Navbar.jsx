import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="brand">Aura Healing</a>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
            </div>
        </nav>
    );
}