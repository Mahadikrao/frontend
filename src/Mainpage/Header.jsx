import { useState } from "react";
import "../Style/App.css"; // Import your CSS file for styling
import Logout from "../componets/Logout";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/">Your Logo</a>
          <button className="navbar-toggler" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <nav className={`navbar-collapse ${isMenuOpen ? "open" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
            <Logout />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
