import React from "react"
import logo from "../assets/images/hotelogo.jpg"
import { Link } from "react-router-dom"
import useOnline from "../hooks/useOnline"
import { useState } from "react"

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 40px",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                position: "sticky",
                top: "0",
                zIndex: 1000,
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                borderBottom: "2px solid #f1f1f1",
                fontFamily: "'Poppins', sans-serif"
            }}>
                {/* Logo Section */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px"
                }}>
                    <img src={logo} alt="Logo" style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease"
                    }} />
                    <h1 style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        color: "#333",
                        margin: "0"
                    }}>QuickBite</h1>
                </div>

                {/* Navigation Menu */}
                <div>
                    <ul style={{
                        display: "flex",
                        listStyle: "none",
                        gap: "30px",
                        fontSize: "18px",
                        fontWeight: "500",
                        margin: "0",
                        padding: "0"
                    }}>
                        <li><Link to="/" style={linkStyle}>Home</Link></li>
                        <li><Link to="/about" style={linkStyle}>About</Link></li>
                        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
                        <li><Link to="/cart" style={linkStyle}>Cart</Link></li>
                        <li><Link to="/instamart" style={linkStyle}>Instamart</Link></li>
                    </ul>
                </div>

                {/* Online Status and Login Button */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px"
                }}>
                    <h1 style={{
                        fontSize: "18px",
                        color: isOnline ? "#4CAF50" : "#F44336",
                        margin: "0"
                    }}>
                        {isOnline ? "Online" : "Offline"}
                    </h1>
                    <button onClick={() => setIsLoggedIn(!isLoggedIn)} style={buttonStyle}>
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>
                </div>
            </div>
        </>
    )
}

const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
    transition: "color 0.3s ease",
    padding: "5px 0",
};

const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#FF5722",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "5px",
};

export default Header;