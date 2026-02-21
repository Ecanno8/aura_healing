import React, { useState } from "react";
import "../styles/Services.css";

// images from public folder
const service1Img = "/images/IMG_7804_websize.jpg";
const service2Img = "/images/IMG_7774_websize.jpg";
const service3Img = "/images/IMG_8011_websize.jpg";

export default function Services() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCard = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const services = [
        {
            title: "Limpia Energy Cleansing",
            price: "$120",
            image: service1Img,
            short:
                "A traditional spiritual cleansing to remove stagnant or heavy energy.",
            full:
                "This session includes a full energetic scan, egg limpia cleansing, grounding integration, and guidance on maintaining energetic protection after your session. Clients often report feeling lighter, calmer, and more centered."
        },
        {
            title: "Aura Reading",
            price: "$95",
            image: service2Img,
            short:
                "Insight into your emotional, spiritual, and energetic state.",
            full:
                "During this reading we explore your energetic field, emotional blocks, intuitive messages, and patterns currently influencing your life path. You will leave with clarity and practical grounding suggestions."
        },
        {
            title: "Chakra Balancing",
            price: "$110",
            image: service3Img,
            short:
                "Realign and harmonize your body's energetic centers.",
            full:
                "Using guided intention, grounding techniques, and energy work, each chakra is gently balanced to restore flow. This session supports emotional stability, relaxation, and energetic alignment."
        }
    ];

    return (
        <div className="services-page">
            <h1 className="services-title">Services</h1>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <img src={service.image} alt={service.title} />

                        <h3>{service.title}</h3>
                        <p className="price">{service.price}</p>

                        <p className="preview">{service.short}</p>

                        <div className={`full-text ${openIndex === index ? "open" : ""}`}>
                            <p>{service.full}</p>
                        </div>

                        <button
                            className="read-more"
                            onClick={() => toggleCard(index)}
                        >
                            {openIndex === index
                                ? "Hide description"
                                : "Read full description"}
                        </button>

                        <a
                            className="book-btn"
                            href="https://calendly.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Book
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}