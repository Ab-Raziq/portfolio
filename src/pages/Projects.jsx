import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const projects = [
  {
    id: 1,
    title: "Qr Website",
    description: "A modern and responsive QR Code Generator built with HTML, CSS and JavaScript, featuring a clean UI and instant QR code generation." ,
    technology: "HTML • CSS • JavaScript",
   image: process.env.PUBLIC_URL + "/qr.jpg",
    github:
      "https://ab-raziq.github.io/MY-Project-Html-Css/qr%20code/"
  },

  {
    id: 2,
    title: "Calculator App",
    description:
      "A responsive calculator website built with HTML, CSS and JavaScript.",
    technology: "HTML • CSS • JavaScript",
    image:process.env.PUBLIC_URL + "/calculator.jpg",
    github: "https://ab-raziq.github.io/MY-Project-Html-Css/calculator/"
  },

  {
    id: 3,
    title: "Portfolio",
    description:
      "My personal portfolio built with React and Bootstrap.",
    technology: "React • Bootstrap • CSS",
    image:process.env.PUBLIC_URL + "/portfolio.jpg",
    github: "https://ab-raziq.github.io/portfolio/"
  },

  
  {
    id: 4,
    title: "Keller Website",
    description: "A modern and responsive job search platform built with HTML, CSS and JavaScript, designed to help users discover and explore job opportunities with ease.",
    technology: "React • Bootstrap • CSS",
    image:process.env.PUBLIC_URL + "keller.jpg",
    github: "https://ab-raziq.github.io/MY-Project-Html-Css/keller/"
  
];

const Projects = () => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <div className={`projects-page ${darkMode ? "project dark" : "project"}`}>

      <div className="projects-header">
        <p className="projects-subtitle">MY WORK</p>

        <h1>My Projects</h1>

        <p>
          Here are some of the projects I have created
          while learning and working with modern web technologies.
        </p>
      </div>

      <div className="projects-container">

        {projects.map((project) => (
          <div className="project-card" key={project.id}>

            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-content">

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <span>{project.technology}</span>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Projects;
