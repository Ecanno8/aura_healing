// src/pages/Home.jsx
import React from "react";
import "../styles/Home.css";

export default function HomePage() {
    return (
        <div className="home-page">
            {/* Hero / Welcome */}
            <section className="parallax-section hero">
                <div className="hero-content">
                    <h1>Welcome to Aura’s Healing</h1>
                    <p>Where ancestral wisdom meets contemporary healing modalities.</p>
                </div>
            </section>

            {/* About Teaser */}
            <section className="parallax-section about-teaser">
                <div className="content">
                    <h2>About Laura</h2>
                    <p>Rooted in a lineage of healers, Laura blends ancestral wisdom with modern practices.</p>
                </div>
            </section>

            {/* Services Teaser */}
            <section className="parallax-section services-teaser">
                <div className="content">
                    <h2>Services</h2>
                    <p>Reiki, Chakra Workshops, and Somatic Healing – find your balance.</p>
                </div>
            </section>
        </div>
    );
}