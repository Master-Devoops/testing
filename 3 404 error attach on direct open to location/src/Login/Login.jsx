import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* <p className="forgot-password">Forgot Password?</p> */}
        <Link
          to="/forgotpassword"
          state={{ fromLogin: true }}
          className="forgot-password"
        >
          Forgot Password?
        </Link>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
