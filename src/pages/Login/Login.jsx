import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="login-page">

            {/* Floating Background Shapes */}
            <div className="login-shape shape-one"></div>
            <div className="login-shape shape-two"></div>
            <div className="login-shape shape-three"></div>


            <div className="login-container">

                {/* LEFT SIDE */}
                <div className="login-left">

                    <div className="brand-icon">
                        🛍️
                    </div>

                    <h1>
                        Welcome
                        <br />
                        Back!
                    </h1>

                    <p>
                        Login to continue your shopping
                        journey with E-Shop.
                    </p>

                    <div className="login-illustration">

                        <div className="floating-item item-one">
                            👟
                        </div>

                        <div className="floating-item item-two">
                            🎧
                        </div>

                        <div className="floating-item item-three">
                            📦
                        </div>

                        <div className="cart-circle">
                            🛒
                        </div>

                    </div>

                </div>


                {/* RIGHT SIDE */}
                <div className="login-right">

                    <h2>Login to your account</h2>

                    <p className="login-description">
                        Enter your details to continue
                    </p>


                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            navigate("/");
                        }}
                    >

                        {/* Email */}
                        <div className="login-input">

                            <label>Email Address</label>

                            <div className="input-wrapper">

                                <span>📧</span>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                />

                            </div>

                        </div>


                        {/* Password */}
                        <div className="login-input">

                            <label>Password</label>

                            <div className="input-wrapper">

                                <span>🔒</span>

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter your password"
                                />

                                <button
                                    type="button"
                                    className="eye-button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? "🙈" : "👁️"}
                                </button>

                            </div>

                        </div>


                        {/* Options */}
                        <div className="login-options">

                            <label className="remember">

                                <input type="checkbox" />

                                <span>
                                    Remember me
                                </span>

                            </label>

                            <a href="#">
                                Forgot Password?
                            </a>

                        </div>


                        {/* Login Button */}
                        <button
                            type="submit"
                            className="login-button"
                        >
                            Login
                            <span>→</span>
                        </button>

                    </form>


                    {/* Divider */}
                    <div className="divider">

                        <span></span>

                        <p>OR</p>

                        <span></span>

                    </div>


                    {/* Social Login */}
                    <div className="social-login">

                        <button>
                            🌐
                            Continue with Google
                        </button>

                    </div>


                    {/* Signup */}
                    <p className="signup-text">

                        Don't have an account?

                        <Link to="/signup">
                            Create Account
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
}

export default Login;