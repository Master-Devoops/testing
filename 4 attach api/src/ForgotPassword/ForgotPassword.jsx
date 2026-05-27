import { useLocation } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import "./ForgotPassword.css";

function ForgotPassword() {
  const location = useLocation();

  // If this page was accessed directly (no routing state passed), show the 404 page
  if (!location.state?.fromLogin) {
    return <NotFound />;
  }

  return (
    <div className="reset-container">
      <div className="reset-box">
        <h2>Reset Password</h2>

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Enter New Password" />

        <input
          type="password"
          placeholder="Enter Password Again For Verification"
        />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default ForgotPassword;
