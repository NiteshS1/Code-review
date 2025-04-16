import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}

export default Signup;
