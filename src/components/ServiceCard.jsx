import { useState } from "react";

const ServiceCard = ({ image, title, price, description }) => {
    const [expanded, setExpanded] = useState(false);

    const preview =
        description && description.length > 120
            ? description.slice(0, 120) + "..."
            : description;

    return (
        <div className="service-card">
            <img src={image} alt={title} />

            <div className="service-content">
                <h2>{title}</h2>

                <p className="price">
                    <strong>Price:</strong> {price}
                </p>

                <p className={`description ${expanded ? "expanded" : ""}`}>
                    {expanded ? description : preview}
                </p>

                <div className="buttons-row">
                    <button
                        className="desc-button"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? "Show Less" : "Read More"}
                    </button>

                    <a className="book-button" href="#">
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;