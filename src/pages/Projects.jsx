import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const projects = [
  {
    id: 1,
    title: "Gallery Website",
    description:
      "A responsive gallery website built with HTML, CSS and JavaScript.",
    technology: "HTML • CSS • JavaScript",
   image: process.env.PUBLIC_URL + "/Gallary.jpg"
    github:
      "https://github.com/Ab-Raziq/MY-Project-Html-Css/tree/fbc5a30178be26183e99076fdc83f93c9a01decc/Gallary",
  },

  {
    id: 2,
    title: "Add Friend App",
    description:
      "A responsive add friend website built with HTML, CSS and JavaScript.",
    technology: "HTML • CSS • JavaScript",
    image: "/add-friend.jpg",
    github: "https://github.com/Ab-Raziq/MY-Project-Html-Css/tree/fbc5a30178be26183e99076fdc83f93c9a01decc/add%20frined",
  },

  {
    id: 3,
    title: "Portfolio",
    description:
      "My personal portfolio built with React and Bootstrap.",
    technology: "React • Bootstrap • CSS",
    image: "/portfolio.jpg",
    github: "https://github.com/Ab-Raziq/",
  },
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
