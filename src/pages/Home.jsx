import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">

            {/* HERO PARALLAX */}
            <div
                className="parallax hero"
                style={{ backgroundImage: `url(/images/IMG_7802_websize.jpg)` }}
                onClick={() => navigate("/welcome")}
            >
                <div className="overlay">
                    <h1>Aura Healing</h1>
                    <p>Where ancestral wisdom meets modern healing</p>
                </div>
            </div>

            {/* WELCOME PARALLAX / ABOUT INTRO */}
            <div
                className="parallax section"
                style={{ backgroundImage: `url(/images/reikismoke.jpg)` }}
                onClick={() => navigate("/about")}
            >
                <div className="overlay">
                    <h2>I welcome you to Aura’s Healing space.</h2>
                    <p>Click below to continue your journey</p>
                </div>
            </div>

            {/* SERVICES PARALLAX (UPDATED IMAGE) */}
            <div
                className="parallax section"
                style={{ backgroundImage: `url(/images/reikirocks.jpg)` }}
                onClick={() => navigate("/services")}
            >
                <div className="overlay">
                    <h2>Our Services</h2>
                    <p>Reiki • Somatic Healing • Chakra Work</p>
                </div>
            </div>

        </div>
    );
}