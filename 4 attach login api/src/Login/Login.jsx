import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

    // =========================
    // NAVIGATION
    // =========================

    const navigate = useNavigate();

    // =========================
    // STATES
    // =========================

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [loading, setLoading] = useState(false);

    // =========================
    // LOGIN FUNCTION
    // =========================

    const handleLogin = async () => {

        // CLEAR OLD MESSAGES
        setSuccessMessage("");
        setErrorMessage("");

        // =========================
        // EMPTY FIELD CHECK
        // =========================

        if (
            email.trim() === "" ||
            password.trim() === ""
        ) {

            setErrorMessage(
                "⚠️ Please Fill All Fields"
            );

            return;
        }

        // =========================
        // START LOADING
        // =========================

        setLoading(true);

        try {

            // =========================
            // API CALL
            // =========================

            const response = await fetch(
                "http://localhost:3000/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            // CONVERT RESPONSE TO JSON
            const data = await response.json();

            // =========================
            // SUCCESS LOGIN
            // =========================

            if (response.ok && data.success) {

                // SAVE TOKEN
                localStorage.setItem(
                    "token",
                    data.token
                );

                // SAVE USER DATA
                localStorage.setItem(
                    "user",
                    JSON.stringify(data.user)
                );

                // SUCCESS MESSAGE
                setSuccessMessage(
                    "🎉 Login Successful"
                );

                // REDIRECT TO DASHBOARD
                setTimeout(() => {

                    navigate(
                        "/dashboard",
                        {
                            state: {
                                fromLogin: true,
                            },
                        }
                    );

                }, 1500);

            }

            // =========================
            // LOGIN ERRORS
            // =========================

            else {

                // USER NOT FOUND
                if (data.code === "USER_NOT_FOUND") {

                    setErrorMessage(
                        "⚠️ User Not Found"
                    );
                }

                // INVALID PASSWORD
                else if (data.code === "INVALID_PASSWORD") {

                    setErrorMessage(
                        "⚠️ Incorrect Password"
                    );
                }

                // DEFAULT ERROR
                else {

                    setErrorMessage(
                        "⚠️ Login Failed"
                    );
                }
            }

        }

        // =========================
        // SERVER ERROR
        // =========================

        catch (error) {

            console.log(error);

            setErrorMessage(
                "⚠️ Server Error"
            );
        }

        // =========================
        // STOP LOADING
        // =========================

        finally {

            setLoading(false);
        }
    };

    // =========================
    // JSX UI
    // =========================

    return (

        <div className="login-container">

            <div className="login-box">

                <h2>Login</h2>

                {/* SUCCESS MESSAGE */}
                {
                    successMessage && (
                        <div className="success-message">
                            {successMessage}
                        </div>
                    )
                }

                {/* ERROR MESSAGE */}
                {
                    errorMessage && (
                        <div className="error-message">
                            {errorMessage}
                        </div>
                    )
                }

                {/* EMAIL INPUT */}
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    disabled={loading}
                />

                {/* PASSWORD INPUT */}
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    disabled={loading}
                />

                {/* FORGOT PASSWORD */}
                <Link
                    to="/forgotpassword"
                    state={{ fromLogin: true }}
                    className="forgot-password"
                >
                    Forgot Password?
                </Link>

                {/* LOGIN BUTTON */}
                <button
                    onClick={handleLogin}
                    disabled={loading}
                >

                    {
                        loading
                            ? "Logging in..."
                            : "Login"
                    }

                </button>

            </div>

        </div>
    );
}

export default Login;