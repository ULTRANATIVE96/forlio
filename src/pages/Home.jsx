import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";
import { HeroSection } from "../components/heroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectSection } from "../components/ProjectSection";
import {ContactSection} from "../components/ContactSection"
import { Footer } from "../components/Footer";
export const Home = ()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
    
       {/*  Theme Toggle */}
        <ThemeToggle/>
       {/*  Background Effect */}
        <StarBackground/>
       {/*  NavBar */}
        <Navbar/>
       {/*  Main Content */}
        <main className="pt-20 md:pt-24">
            <HeroSection/>
            <AboutSection/>
            <SkillSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>
       {/*  Footer */}
        <Footer/>
    </div>
}