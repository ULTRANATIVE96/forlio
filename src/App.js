import React, { useEffect } from "react";
import Buttons from "./Buttons";
import Languages from "./languages";
import Projects from "./projects";

// Don't import Projects here if it's meant to open in a new tab

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const body = document.body;

      if (scrollY < 300) {
        body.style.backgroundColor = "#6200ffff"; // Blue
      } else if (scrollY < 600) {
        body.style.backgroundColor = "#5550bbff"; // Purple
      } else if (scrollY < 900) {
        body.style.backgroundColor = "#7e6ce6ff"; // Cyan
      } else {
        body.style.backgroundColor = "#7fe1eeff"; // Light gray
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Buttons />
      <Languages />
    </div>
  );
}

export default App;
