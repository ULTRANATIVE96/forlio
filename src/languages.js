import React from "react";
import "./languages.css";
import { 
  FaJava, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaDatabase 
} from "react-icons/fa";
import { SiKotlin, SiCplusplus } from "react-icons/si";

function Languages() {
  const languages = [
    { name: "Java", icon: <FaJava color="#f89820" /> },
    { name: "JavaScript", icon: <FaJsSquare color="#f7df1e" /> },
    { name: "Python", icon: <FaPython color="#3776ab" /> },
    { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
    { name: "Kotlin", icon: <SiKotlin color="#7f52ff" /> },
    { name: "SQL", icon: <FaDatabase color="#00618a" /> },
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  ];

  return (
    <div className="languages-section">
      <h2>Programming Languages</h2>
      <div className="languages-grid">
        {languages.map((lang, index) => (
          <div key={index} className="language-card">
            <span className="icon">{lang.icon}</span>
            <p>{lang.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
