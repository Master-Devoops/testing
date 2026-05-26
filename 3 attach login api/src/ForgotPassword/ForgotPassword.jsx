import "./ForgotPassword.css";

function ForgotPassword() {
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