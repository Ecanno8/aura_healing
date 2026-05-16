export default function Footer() {
    return (
        <footer
            style={{
                textAlign: "center",
                padding: "1rem",
                backgroundColor: "#f5f5f5",
                borderTop: "1px solid rgba(0,0,0,0.08)",
                marginTop: "3rem",
                fontSize: "0.9rem",
                color: "#4a3c31",
            }}
        >
            <p>
                Aura Healing™ | © {new Date().getFullYear()} All Rights Reserved
            </p>
            <p>healing.aura888@gmail.com</p>
        </footer>
    );
}