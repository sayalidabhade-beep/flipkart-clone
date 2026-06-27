import "./Navbar.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Navbar({ search, setSearch }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"
          alt="Flipkart"
        />
      </div>

      <div className="travel">✈️ Travel</div>

      <div className="search">
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="menu">
        <span onClick={() => setIsLoginOpen(!isLoginOpen)}>
          👤 Login
        </span>

        {isLoginOpen && (
          <div className="dropdown">

            <div className="top-section">
              <span>New customer?</span>
              <Link to="/register">Sign Up</Link>
            </div>

            <ul>
              <li onClick={() => navigate("/profile")}>👤 My Profile</li>

              <li>⭐ Flipkart Plus Zone</li>

              <li onClick={() => navigate("/orders")}>📦 Orders</li>

              <li onClick={() => navigate("/wishlist")}>❤️ Wishlist</li>

              <li onClick={() => navigate("/rewards")}>🎁 Rewards</li>

              <li onClick={() => navigate("/giftcards")}>🎁 Gift Cards</li>

              <li onClick={() => navigate("/address")}>📍 Manage Address</li>

              <li onClick={() => navigate("/payments")}>💳 Payments</li>

              <li
                onClick={() => {
                  localStorage.removeItem("loggedInUser");
                  navigate("/login");
                }}
              >
                🚪 Logout
              </li>
            </ul>

          </div>
        )}

        <div className="more-container">
          <span>More ▼</span>

          <div className="more-dropdown">
            <ul>
              <li>🔔 Notification Preferences</li>
              <li>🎧 24x7 Customer Care</li>
              <li>📢 Advertise</li>
              <li>📱 Download App</li>
            </ul>
          </div>
        </div>

        <span onClick={() => navigate("/cart")}>
          🛒 Cart
        </span>
      </div>
    </div>
  );
}

export default Navbar;