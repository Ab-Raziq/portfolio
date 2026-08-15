import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">

        <Link className="navbar-brand" to="/">
          My Portfolio
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >
          <div className="navbar-nav ms-auto align-items-lg-center">

            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/about">
              About
            </Link>

            <Link className="nav-link" to="/projects">
              Projects
            </Link>

            <Link className="nav-link" to="/contact">
              Contact
            </Link>

            <button
              className="btn btn-outline-secondary ms-lg-3 mt-2 mt-lg-0"
              onClick={toggleDarkMode}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;