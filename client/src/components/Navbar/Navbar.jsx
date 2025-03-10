import { Link } from "react-router-dom";
import "./Navbar.css";  // Plain CSS

function Navbar() {
    return (
        <nav className="navbar">
        <Link to="/" className="nav-link">Review</Link>
        <Link to="/chatbot" className="nav-link">Bot</Link>
        </nav>
    );
}

export default Navbar;
