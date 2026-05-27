import { useState } from "react";
import "./Register.css";

function Register() {
  // =========================
  // INPUT STATES
  // =========================

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // =========================
  // MESSAGE STATES
  // =========================

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // =========================
  // REGISTER FUNCTION
  // =========================

  const handleRegister = async () => {
    // CLEAR OLD MESSAGES
    setSuccessMessage("");
    setErrorMessage("");

    // =========================
    // EMPTY FIELD CHECK
    // =========================

    if (
      fullname.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setErrorMessage("⚠️ Please Fill All Fields");

      return;
    }

    // =========================
    // PASSWORD VALIDATION
    // =========================

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
      setErrorMessage(
        "⚠️ Password Must Contain:\n" +
          "• 1 Uppercase Letter\n" +
          "• 1 Lowercase Letter\n" +
          "• 1 Number\n" +
          "• 1 Special Character\n" +
          "• Minimum 8 Characters",
      );

      return;
    }

    // =========================
    // PASSWORD MATCH CHECK
    // =========================

    if (password !== confirmPassword) {
      setErrorMessage("⚠️ Passwords Do Not Match");

      return;
    }

    // =========================
    // API CALL
    // =========================

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          fullname,
          email,
          password,
        }),
      });

      // CONVERT RESPONSE TO JSON
      const data = await response.json();

      // =========================
      // SUCCESS RESPONSE
      // =========================

      if (response.ok && data.success) {
        setSuccessMessage("🎉 You Are Successfully Registered 🎉");

        // CLEAR INPUTS
        setFullname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }

      // =========================
      // ERROR RESPONSE
      // =========================
      else {
        if (data.code === "EMAIL_EXISTS") {
          setErrorMessage("⚠️ Email Already Registered");
        } else if (data.code === "INVALID_EMAIL") {
          setErrorMessage("⚠️ Invalid Email Format");
        } else if (data.code === "WEAK_PASSWORD") {
          setErrorMessage("⚠️ Weak Password");
        } else {
          setErrorMessage("⚠️ Registration Failed");
        }
      }
    } catch (error) {
      // =========================
      // SERVER ERROR
      // =========================

      console.log(error);

      setErrorMessage("⚠️ Server Error");
    }
  };

  // =========================
  // JSX UI
  // =========================

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>

        {/* SUCCESS MESSAGE */}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        {/* ERROR MESSAGE */}
        {errorMessage && (
          <div className="error-message">
            <pre>{errorMessage}</pre>
          </div>
        )}

        {/* FULLNAME */}
        <input
          type="text"
          placeholder="Enter Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Enter New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* CONFIRM PASSWORD */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button onClick={handleRegister}>Submit</button>
      </div>
    </div>
  );
}

export default Register;
