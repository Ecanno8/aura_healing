import React, { useState } from "react";
import "../styles/Services.css";

// images (Vite-safe imports)
import reikiTableImg from "../assets/images/reikitable.jpg";
import chakraWorkshopImg from "../assets/images/IMG_7774_websize.jpg";
import somaticImg from "../assets/images/IMG_8011_websize.jpg";

export default function Services() {
    const services = [
        {
            id: 1,
            title: "Reiki Energy Healing",
            price: "$111",
            img: reikiTableImg,
            description:
                "I offer a quiet and safe space where you are invited to deeply relax, reconnect, and realign. Each session begins with a fifteen-minute consultation where we explore your current life state and I intuitively tune into your energy. From there we step forward into a meditative state of presence, gently opening the pathways of your mind, body, and spirit as I channel life-force energy through Reiki. Guided by intuitive gentle touch and ancestral wisdom to support, restore, and release.",
            calendly: "https://calendly.com/healing-aura888",
        },
        {
            id: 2,
            title: "Chakra Bracelet Workshop",
            price: "$44",
            img: chakraWorkshopImg,
            description:
                "The Chakra Bracelet Workshop offers a welcoming, communal space for like-minded individuals on their healing journeys. You’ll receive foundational insight into how the chakra system functions on emotional and spiritual levels. Through guided reflection and shared storytelling, you create a personalized chakra bracelet, setting a clear intention for the chakra you wish to support and balance. Minimum 5 participants, max 10.",
            calendly: "https://calendly.com/healing-aura888",
        },
        {
            id: 3,
            title: "Somatic Healing, TRE",
            price: "$222",
            img: somaticImg,
            description:
                "TRE™ (Tension & Trauma Releasing Exercises) is a body-based practice designed to help the body release deep patterns of stress, tension, and trauma. Sessions will be available Late Spring / Early Summer 2026.",
            calendly: "https://calendly.com/healing-aura888",
        },
    ];

    const [expanded, setExpanded] = useState({});

    const toggleExpand = (id) => {
        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="services-page">
            <div className="services-header">
                <h1>Our Services</h1>
                <p>**Home and On-site Calls only travel fees may apply</p>
            </div>

            <div className="services-container">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <img src={service.img} alt={service.title} />

                        <div className="service-content">
                            <h2>{service.title}</h2>
                            <p className="price">{service.price} + travel fee</p>

                            <div className="buttons-row">
                                <a
                                    href={service.calendly}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="book-button"
                                >
                                    Book Session
                                </a>

                                <button
                                    onClick={() => toggleExpand(service.id)}
                                    className="desc-button"
                                >
                                    {expanded[service.id] ? "Hide Details" : "Read More"}
                                </button>
                            </div>

                            {expanded[service.id] && (
                                <p className="description">
                                    {service.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}