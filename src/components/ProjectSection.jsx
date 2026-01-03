import {ArrowRight, ExternalLink, Github} from "lucide-react"

const projects = [
    {
        id: 1,
        title:" Smart Navigator",
        description: "A hostipal navigator and medical assistance app using React and CSS",
        image:"/projects/navProject.png",
        tags: ["React","TailwindCSS","MongoDB"],
        demourl: "#",
        githuburl:"https://github.com/ultranative96",
        },
            {
        id: 2,
        title:" Web Hosting",
        description: "An app that lets you check event near your location using React and CSS",
        image:"/projects/PartyProject.png",
        tags: ["React","TailwindCSS","MongoDB"],
        demourl: "#",
        githuburl:"https://github.com/ultranative96",
        },
            {
        id: 3,
        title:" Python A.I",
        description: "a Python chatbot application built using React and CSS",
        image:"/projects/FProject.png",
        tags: ["React","TailwindCSS","MongoDB"],
        demourl: "#",
        githuburl:"https://github.com/ultranative96",
        },
];
export const ProjectSection =() =>{

  return(<section 
    id="projects"
    className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {""}
            Featured <span className="text-primary">Projects
                </span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                    Here are some of my projects. Each project was carefully crafted with attention to details, pperformance, and user expereince
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {projects.map((project,key) =>(
                    <div 
                    key={key} 
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                        <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag,index)=>(
                                <span
                                key={index}
                                className="px-2 py-1 ext-xs border font-medium rounded-full bg-primary/20 text-secondary-foregorund"
                                >{tag}</span>
                            ))}    
                            </div>
                      

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                        <div className="flex justif-between items-center">
                            <div className="flex space-x-3">
                                <a  
                                href={project.demourl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    {" "}
                                    <ExternalLink size={20}/>
                                </a>
                                <a 
                                href={project.githuburl}
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <Github size={20}/>
                                </a>
                            </div> 
                        </div>
                        </div>
                    </div>
                   ))}
                </div>
                <div className="text-center mt-12">
                    <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/ultranative96"
                    >
                    Check My GitHub <ArrowRight size={16}/>
                    </a>
                </div>
        </div>
    </section>)
}