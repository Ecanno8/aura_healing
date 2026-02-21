import React from "react";
import "../styles/About.css";

const aboutImg = "/images/IMG_7733_websize.jpg";

export default function AboutPage() {
    const aboutText = `
My name is Laura Agustina Castillo. I stand rooted in the lineage of several generations of
healers. In this modern world, I carry forward the sacred gifts of my ancestors—integrating
traditional wisdom rooted in indigenous knowledge with healing modalities that nurture the mind,
body, and spirit.
My work weaves together ancestral healing traditions from my father’s lineage, Reiki and
somatic practices. I am devoted to providing grounded, compassionate guidance rooted in
tradition and adapted for the modern world.
This is more than a practice.
It is a legacy.
It is devotion.
It is a return to wholeness.
I am the first born daughter of immigrant parents, a bridge between generations, cultures, and
worlds.
...
`;

    return (
        <div className="about-page">
            <div className="about-hero">
                <img src={aboutImg} alt="Laura Agustina Castillo" />
            </div>
            <div className="about-content">
                <h1>About Laura</h1>
                <p>{aboutText}</p>
            </div>
        </div>
    );
}