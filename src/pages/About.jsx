import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className={`container-fluid container-about-hero ${darkMode ? "about dark" : "about"}`}>
      
      <div className="image-hero">
          <img
            src={`${process.env.PUBLIC_URL}/image.jpg`}
            alt="Abdul Raziq"
          />
      </div>

      <div className="about-hero">
        <h1>About Me</h1>

        <p>
          Hi! I'm Abdul Raziq, a React Developer passionate about
          building modern and responsive web applications.
          I enjoy learning new technologies and turning ideas
          into useful and beautiful websites.
        </p>

        <p>
          I have experience with React, JavaScript, Bootstrap,
          React Router, APIs, and modern React Hooks.
        </p>
      </div>

    </div>
  );
};

export default About;
