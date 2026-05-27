import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-box">
        <h1 className="error-code">404</h1>
        <h2>Oops! Access Denied</h2>
        <p className="error-description">
          The page you are looking for has expired, requires specific authorization, or does not exist.
        </p>
        <button className="back-btn" onClick={() => navigate("/")}>
          Go back to Login
        </button>
      </div>
    </div>
  );
}

export default NotFound;
