import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
    return (
        <div className="home-page">

            {/* Hero Section */}
            <section className="hero">

                <div className="hero-text">

                    <span className="welcome">
                        ✨ Welcome to E-Commerce
                    </span>

                    <h1>
                        Shop Smart.
                        <br />
                        Live Better.
                    </h1>

                    <p>
                        Discover amazing products, great prices,
                        and everything you need in one place.
                    </p>

                    <div className="hero-buttons">
                        <button className="shop-btn">
                            🛍️ Shop Now
                        </button>

                        <button
                        className="explore-btn"
                        onClick={() => navigate("/Product")}
                        >
                        Explore Products
                    </button>
                    </div>

                </div>


                {/* Hero Visual */}
                <div className="hero-visual">

                    <div className="circle"></div>

                    <div className="shopping-card card-one">
                        🛍️
                    </div>

                    <div className="shopping-card card-two">
                        👟
                    </div>

                    <div className="shopping-card card-three">
                        🎧
                    </div>

                    <div className="main-shopping">
                        🛒
                    </div>

                </div>

            </section>


            {/* Features */}
            <section className="features">

                <div className="feature-card">
                    <div className="feature-icon">🚚</div>
                    <h3>Fast Delivery</h3>
                    <p>Get your products delivered quickly.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">🔒</div>
                    <h3>Secure Payment</h3>
                    <p>Your payments are safe and protected.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">⭐</div>
                    <h3>Best Quality</h3>
                    <p>Quality products at amazing prices.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">💬</div>
                    <h3>24/7 Support</h3>
                    <p>We are always here to help you.</p>
                </div>

            </section>

        </div>
    );
}

export default Home;