import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">

            {/* Parallax Hero */}
            <div
                className="parallax hero"
                style={{ backgroundImage: `url(/images/IMG_7802_websize.jpg)` }}
                onClick={() => navigate("/about")}
            >
                <div className="overlay">
                    <h1>Welcome to Aura Healing</h1>
                    <p>Where ancestral wisdom meets modern healing</p>
                </div>
            </div>

            {/* About Section */}
            <div
                className="parallax section"
                style={{ backgroundImage: `url(/images/IMG_7733_websize.jpg)` }}
                onClick={() => navigate("/about")}
            >
                <div className="overlay">
                    <h2>About Laura</h2>
                    <p>Learn about Laura’s lineage and healing journey</p>
                </div>
            </div>

            {/* Services Section */}
            <div
                className="parallax section"
                style={{ backgroundImage: `url(/images/IMG_7804_websize.jpg)` }}
                onClick={() => navigate("/services")}
            >
                <div className="overlay">
                    <h2>Our Services</h2>
                    <p>Explore Reiki, Chakra Workshops, and Somatic Healing</p>
                </div>
            </div>



        </div>
    );
}