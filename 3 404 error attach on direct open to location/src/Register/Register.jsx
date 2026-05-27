import { useLocation } from "react-router-dom";
import "./Register.css";

function Register() {
    const location = useLocation();
    return (
        <div className="reset-container">
            <div className="reset-box">
                <h2>Register</h2>
                <input type="name" placeholder="Enter Full Name" />
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

export default Register;