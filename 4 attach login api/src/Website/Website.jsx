import "./Website.css";
import { useNavigate } from "react-router-dom";

export default function Website() {
  const navigate = useNavigate();

  return (
    <div className="website-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyWebsite</h2>

        <div className="nav-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>

          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-box">
          <h1>Welcome to Our Website</h1>

          <p>
            Create your account, connect with people, and explore a modern
            glassmorphism UI experience.
          </p>

          <button
            className="get-started-btn"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
