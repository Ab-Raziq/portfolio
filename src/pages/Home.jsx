import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`container-fluid container-hero ${
          darkMode ? "home dark" : "home"
        }`}
      >
        <div className="inner-hero">
          <h1>Hi! I'm Abdul Raziq</h1>

          <h2>React Developer</h2>

          <p>
            Ready to build modern and responsive web applications.
          </p>

          <button
            type="button"
            className="btn btn-success"
            onClick={() => navigate("/projects")}
          >
            View My Projects
          </button>
        </div>

        <div className="image">
          <img
            src={`${process.env.PUBLIC_URL}/image.jpg`}
            alt="Abdul Raziq"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
