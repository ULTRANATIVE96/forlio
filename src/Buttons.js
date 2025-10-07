import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./buttons.css";

function Buttons() {
  const [hideProfile, setHideProfile] = useState(false); // ✅ This must be here

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHideProfile(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

             
    return ( 
    <div className="buttons-container"> 
    <div className={`profile-layout ${hideProfile ? "hide" : ""}`}>
        
         {/* Contact on top */} 
         <div className="nav-link contact"> 
            <a href="#contact" className="btn">Contact</a> 
            </div>
            
         {/* Projects on the left */}
<div className="nav-link projects">
  <Link
    to ="/projects"
    rel="noopener noreferrer"
    className="btn"
  >
    Projects
  </Link>
</div>

            
            {/* Profile picture center */} 
            <div className="image-container"> 
                <img src="mepc.jpg" alt="profile" className="circle-image" /> 
                </div> 
                
                {/* Download CV on the right */} 
                <div className="nav-link cv">
                     <a href="/MyCV.docx" download="Divine_Nhlayiseko_CV.docx" className="btn"> Download CV </a> 
                     </div>
                      </div>
        
         <div className="divider"></div>
         
          <div className="about-section"> 
            <h2 className="section-title">About Me</h2> 
            
<p className="about-text"> 
I’m Divine Nhlayiseko Hlungwani 
- a freelance web developer and Computer Science diploma student (2025). 
I specialize in Java, Web Development (HTML, CSS, JavaScript, React), 
MySQL, Kotlin, and Python. I focus on combining structured design with 
creative problem-solving to build efficient and engaging digital solutions.
</p> 
              
              <div className="contact-details"> 
                <p><strong>Name:</strong> Divine Nhlayiseko</p> 
                <p><strong>Phone:</strong> +27 82 123 4567</p>
                <p><strong>Email:</strong> divinehlungwani@example.com</p>
                
                 </div> <div className="interests"> 
                    <span>🌍 Worldbuilding</span> 
                    <span>🧠 Systems Modeling</span>
                    <span>🎨 Creative Coding</span> 
                    <span>📚 Teaching</span> </div> 
                    </div> </div> 
                    
                
); }
 export default Buttons;