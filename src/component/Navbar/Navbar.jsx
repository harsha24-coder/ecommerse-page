import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <span>🛍️</span> E-Commerce
            </div>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search products..."
                />
                <button>🔍</button>
            </div>

            <ul className="nav-links">

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/Product">Products</Link>
                </li>

                <li>
                    <Link to="/login">Login</Link>
                </li>

                <li>
                    <Link to="/signup" className="signup-btn">
                        Signup
                    </Link>
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;