import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Products from "./pages/Product/Products";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
    return (
        <div className="app">

            {/* Same Navbar on every page */}
            <Navbar />

            {/* Page changes below Navbar */}
            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/Product"
                    element={<Products />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

            </Routes>

        </div>
    );
}

export default App;