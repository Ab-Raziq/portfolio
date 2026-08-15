import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="luxury-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Abdul Raziq</h2>
          <p>
            React Developer passionate about building
            modern and responsive web applications.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Follow Me</h3>

          <div className="social-icons">
            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="#" aria-label="Telegram">
              <FaTelegram />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Abdul Raziq. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;