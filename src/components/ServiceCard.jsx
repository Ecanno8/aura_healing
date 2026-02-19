const ServiceCard = ({ image, title, price, description }) => {
    return (
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", margin: "1rem", maxWidth: "400px" }}>
            <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{title}</h3>
            <p><strong>Price:</strong> {price}</p>
            <p>{description}</p>
            <button style={{ marginTop: "1rem", padding: "0.5rem 1rem", backgroundColor: "#6f4a8e", color: "#fff", border: "none", borderRadius: "4px" }}>
                Book Now
            </button>
        </div>
    );
};

export default ServiceCard;