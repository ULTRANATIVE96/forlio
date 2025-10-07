// src/components/SocialLinks.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/YOUR_GITHUB_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  );
}

export default SocialLinks;
