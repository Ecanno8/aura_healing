import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="brand">
                Aura Healing
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/welcome">Welcome</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </div>
        </nav>
    );
}