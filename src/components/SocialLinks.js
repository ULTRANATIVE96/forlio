// src/components/SocialLinks.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/ultranative96"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://linkedin.com/nhlayiseko hlungwani"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  );
}

export default SocialLinks;
