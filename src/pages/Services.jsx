import React from "react";
import "../styles/Services.css";

export default function ServicesPage() {
    const services = [
        {
            id: 1,
            title: "Reiki Energy Healing",
            price: "$111",
            img: "/images/IMG_7804_websize.jpg",
            description: `I offer a quiet and safe space where you are invited to deeply relax, reconnect, 
      and realign. Each session begins with a fifteen-minute consultation where we explore your current 
      life state and I intuitively tune into your energy. From there we step forward into a meditative 
      state of presence, gently opening the pathways of your mind, body, and spirit as I channel 
      life-force energy through Reiki. Guided by intuitive gentle touch and ancestral wisdom to support, 
      restore, and release.`,
            calendly: "https://calendly.com/your-client",
        },
        {
            id: 2,
            title: "Chakra Bracelet Workshop",
            price: "$44",
            img: "/images/IMG_7774_websize.jpg",
            description: `The Chakra Bracelet Workshop offers a welcoming, communal space for like-minded 
      individuals on their healing journeys. You’ll receive foundational insight into how the chakra 
      system functions on emotional and spiritual levels. Through guided reflection and shared 
      storytelling, participants create a personalized chakra bracelet with intention. Minimum 5, 
      maximum 10 participants.`,
            calendly: "https://calendly.com/your-client",
        },
        {
            id: 3,
            title: "Somatic Healing / TRE™",
            price: "$222",
            img: "/images/IMG_8011_websize.jpg",
            description: `Services coming soon. TRE™ (Tension & Trauma Releasing Exercises) helps the 
      body release deep patterns of stress, tension, and trauma. Consists of gentle exercises that 
      fatigue muscles so neurogenic tremors naturally release tension. Benefits: reduce stress, 
      release muscular tension, improve sleep, support emotional resilience, feel more grounded.`,
            calendly: "https://calendly.com/your-client",
        },
    ];

    return (
        <div className="services-page">
            <h1>Our Services</h1>
            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <img src={service.img} alt={service.title} />
                        <div className="service-info">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <div className="service-footer">
                                <span className="price">{service.price}</span>
                                <a
                                    href={service.calendly}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="book-btn"
                                >
                                    Book
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}