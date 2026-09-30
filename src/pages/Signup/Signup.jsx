import React from "react";
import "./Signup.css";

function Signup() {
    return (
        <div className="signup-page">

            <div className="signup-box">

                <div className="signup-icon">
                    🛍️
                </div>

                <h1>Create Account</h1>

                <p className="signup-subtitle">
                    Join E-Shop and start shopping today
                </p>

                <form>

                    <div className="input-group">
                        <label>Full Name</label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="input-group">
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Create a password"
                        />
                    </div>

                    <div className="input-group">
                        <label>Confirm Password</label>

                        <input
                            type="password"
                            placeholder="Confirm your password"
                        />
                    </div>

                    <div className="terms">
                        <input type="checkbox" />

                        <span>
                            I agree to the Terms & Conditions
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="signup-submit"
                    >
                        Create Account
                    </button>

                </form>

                <p className="login-text">
                    Already have an account?
                    <span> Login</span>
                </p>

            </div>

        </div>
    );
}

export default Signup;