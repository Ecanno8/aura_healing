import React, { useState } from "react";
import "../styles/Services.css";

export default function Services() {
    const services = [
        {
            id: 1,
            title: "Reiki Energy Healing",
            price: "$111",
            img: "/images/IMG_7804_websize.jpg",
            description: `I offer a quiet and safe space where you are invited to deeply relax, reconnect, and realign. Each session begins with a fifteen-minute consultation where we explore your current life state and I intuitively tune into your energy. From there we step forward into a meditative state of presence, gently opening the pathways of your mind, body, and spirit as I channel life-force energy through Reiki. Guided by intuitive gentle touch and ancestral wisdom to support, restore, and release.`,
            calendly: "https://calendly.com/username",
        },
        {
            id: 2,
            title: "Chakra Bracelet Workshop",
            price: "$44",
            img: "/images/IMG_7774_websize.jpg",
            description: `The Chakra Bracelet Workshop offers a welcoming, communal space for like-minded individuals on their healing journeys. You’ll receive foundational insight into how the chakra system functions on emotional and spiritual levels. Through guided reflection and shared storytelling, you create a personalized chakra bracelet, setting a clear intention for the chakra you wish to support and balance. Minimum 5 participants, max 10.`,
            calendly: "https://calendly.com/username",
        },
        {
            id: 3,
            title: "Somatic Healing, TRE",
            price: "$222",
            img: "/images/IMG_8011_websize.jpg",
            description: `Services coming soon. TRE™ (Tension & Trauma Releasing Exercises) is a body-based practice designed to help the body release deep patterns of stress, tension, and trauma. Late Spring/Early Summer 2026.`,
            calendly: "https://calendly.com/username",
        },
    ];

    const [expanded, setExpanded] = useState({});

    const toggleExpand = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="services-page">
            <h1>Our Services</h1>
            <div className="services-container">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <img src={service.img} alt={service.title} />
                        <div className="service-content">
                            <h2>{service.title}</h2>
                            <p className="price">{service.price}</p>
                            <div className="buttons-row">
                                <a
                                    href={service.calendly}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="book-button"
                                >
                                    Book Now
                                </a>
                                <button onClick={() => toggleExpand(service.id)} className="desc-button">
                                    {expanded[service.id] ? "Hide" : "Read Full"}
                                </button>
                            </div>
                            <p className={`description ${expanded[service.id] ? "expanded" : ""}`}>
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}