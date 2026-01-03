import { ArrowDown } from "lucide-react"
import profileimg from "../assets/me.jpg"
export const HeroSection =()=>{
    return <section 
        id="hero" 
        className="relative z-0 min-h-screen flex flex-col items-center justify-center px-4 pb-24 md:pb-24"
    >
       
     <div className="container max-w-4xl mx-auto text-center z-10">

        <div className="space-y-6">
             {/* Profile Image */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={profileimg}
            alt="Nhlayiseko Divine Hlungwani"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-primary shadow-lg opacity-0 animate-fade-in"
          />
        </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">

            <span className=" opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Nhlayiseko Divine </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Hlungwani</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar websites and Java Applications using modern technologies.
            Specilaizing in front-end development, building functional software projects that 
            are both magnificent and spectacular
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
                View My Work
            </a>
          </div>
        </div>
     </div>

     <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className=" text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary"/>
     </div>
    </section>
}