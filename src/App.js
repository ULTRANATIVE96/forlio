import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Buttons from "./Buttons";
import Languages from "./languages";
import Projects from "./projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const body = document.body;

      if (scrollY < 300) {
        body.style.backgroundColor = "#6200ffff";
      } else if (scrollY < 600) {
        body.style.backgroundColor = "#5550bbff";
      } else if (scrollY < 900) {
        body.style.backgroundColor = "#7e6ce6ff";
      } else {
        body.style.backgroundColor = "#7fe1eeff";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔹 Keep the Router in index.js, not here */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Buttons />
              <Languages />
              <SocialLinks /> {/* ✅ Add this so your social links appear */}
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
