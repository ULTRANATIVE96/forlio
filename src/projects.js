// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import "./projects.css"; // ✅ import external CSS

const bgImages = {
  "portfolio": "/images/portfolio-bg.jpg",
  "weather-app": "/images/weather-bg.jpg",
  "timezone": "/images/time.jpg",
  "a.i-document-reader": "/images/ai.jpg",
};

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/ULTRANATIVE96/repos")
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((repo) => !repo.fork);
        setRepos(filtered);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading projects...</p>;
  }

  return (
    <div className="projects-container">
      <h1 className="projects-title">My GitHub Projects</h1>

      <div className="projects-grid">
        {repos.map((repo) => {
          const bgImage =
            bgImages[repo.name.toLowerCase()] || "/images/default-bg.jpg";

          return (
            <div
              key={repo.id}
              className="project-card"
              style={{
                borderColor: `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`,
              }}
            >
              <div
                className="project-inner"
                style={{ backgroundImage: `url(${bgImage})` }}
              >
                <div>
                  <h2 className="project-title">{repo.name}</h2>
                  <p className="project-desc">
                    {repo.description || "No description provided."}
                  </p>
                </div>

                <button
                  onClick={() => (window.location.href = repo.html_url)}
                  className={`project-btn ${
                    repo.name.toLowerCase() === "a.i-document-reader"
                      ? "featured"
                      : ""
                  }`}
                >
                  {repo.name.toLowerCase() === "a.i-document-reader" && (
                    <div
                      className="project-btn-bg"
                      style={{ backgroundImage: 'url("/images/oip.webp")' }}
                    ></div>
                  )}
                  <span>View on GitHub</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
