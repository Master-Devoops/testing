import { useState } from "react";
import "./Register.css";

function Register() {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // SUCCESS + ERROR MESSAGE STATES
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async () => {

        // CLEAR OLD MESSAGES
        setSuccessMessage("");
        setErrorMessage("");

        // CHECK EMPTY FIELDS
        if (
            fullname.trim() === "" ||
            email.trim() === "" ||
            password.trim() === "" ||
            confirmPassword.trim() === ""
        ) {

            setErrorMessage("⚠️ Please Fill All Fields");

            return;
        }

        // PASSWORD COMBINATION CHECK
        const passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordPattern.test(password)) {

            setErrorMessage(
                "⚠️ Password Must Contain:\n" +
                "• 1 Uppercase Letter\n" +
                "• 1 Lowercase Letter\n" +
                "• 1 Number\n" +
                "• 1 Special Character\n" +
                "• Minimum 8 Characters"
            );

            return;
        }

        // CHECK PASSWORD MATCH
        if (password !== confirmPassword) {

            setErrorMessage("⚠️ Passwords Do Not Match");

            return;
        }

        try {

            const response = await fetch(
                "http://localhost:3000/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        fullname,
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            // SUCCESS
            if (data.success) {

                setSuccessMessage(
                    "🎉 You Are Successfully Registered 🎉"
                );

                // CLEAR INPUTS
                setFullname("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");

            } else {

                // BACKEND ERROR
                setErrorMessage(
                    "⚠️ " + data.message
                );
            }

        } catch (error) {

            console.log(error);

            setErrorMessage(
                "⚠️ Server Error"
            );
        }
    };

    return (

        <div className="reset-container">

            <div className="reset-box">

                <h2>Register</h2>

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
                            <pre>{errorMessage}</pre>
                        </div>
                    )
                }

                <input
                    type="text"
                    placeholder="Enter Full Name"
                    value={fullname}
                    onChange={(e) =>
                        setFullname(e.target.value)
                    }
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Enter New Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Enter Password Again For Verification"
                    value={confirmPassword}
                    onChange={(e) =>
                        setConfirmPassword(e.target.value)
                    }
                />

                <button onClick={handleRegister}>
                    Submit
                </button>

            </div>

        </div>
    );
}

export default Register;