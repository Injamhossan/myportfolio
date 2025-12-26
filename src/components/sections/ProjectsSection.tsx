import Image from "next/image";
// Using the same profile image as a placeholder for now since I don't have project screenshots
import ProjectPlaceholder from "@/assets/Profile.png"; 

const projects = [
  {
    id: 1,
    title: "Online cinema",
    date: "September 2023",
    category: ["Design", "Web"],
    description: "A feature-rich platform for streaming movies and TV shows. It includes user authentication, personalized recommendations, watchlists, and responsive design for seamless viewing across devices. Technologies: React, Node.js, MongoDB.",
    image: ProjectPlaceholder, // Replace with actual project screenshot
    gradient: "from-pink-600 to-purple-600",
  },
  {
    id: 2,
    title: "E-shop",
    date: "August 2024",
    category: ["E-commerce", "Tech"],
    description: "A modern online shop for electronic devices with a clean UI and secure payment integration. Features include advanced product filtering, dynamic cart updates, and an admin dashboard for managing inventory. Technologies: Next.js, Tailwind CSS, Stripe API.",
    image: ProjectPlaceholder, // Replace with actual project screenshot
    gradient: "from-purple-600 to-blue-600",
  },
  {
    id: 3,
    title: "Games forum",
    date: "December 2024",
    category: ["Games", "Social media"],
    description: "A community-driven forum for gamers to discuss, share, and connect. Includes real-time chat, post moderation, and a ranking system to highlight active contributors. Technologies: Angular, Firebase, WebSocket.",
    image: ProjectPlaceholder, // Replace with actual project screenshot
    gradient: "from-blue-600 to-cyan-600",
  }
];

export default function ProjectsSection() {
  return (
    <section className="bg-black text-white w-full py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-20 text-center md:text-left">
          My <br className="hidden md:block"/> projects
        </h2>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* IMAGE SIDE */}
              <div className="flex-1 w-full relative group">
                {/* Glow Effect */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-r ${project.gradient} blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                
                {/* Image Container */}
                <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 aspect-video md:aspect-[16/10] transform transition-transform duration-500 hover:scale-[1.02]">
                  {/* You would usually use a proper screenshot here. Using a colored placeholder div for visual structure if image is missing, else Image component */}
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20 absolute inset-0 mix-blend-overlay`}></div>
                  {/* Mockup content helper if no real image */}
                  <div className="w-full h-full flex items-center justify-center bg-zinc-900/50">
                     <span className="text-zinc-600 font-bold text-2xl uppercase tracking-widest">Project Preview</span>
                  </div>
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className="flex-1 space-y-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-4">
                  {project.category.map((tag) => (
                    <span key={tag} className="px-5 py-1.5 rounded-full border border-zinc-700 text-zinc-400 text-sm font-medium tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Date */}
                <div className="space-y-2">
                  <h3 className="text-4xl md:text-5xl font-bold">{project.title}</h3>
                  <p className="text-zinc-500 text-sm font-mono tracking-wide">// {project.date}</p>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
                  {project.description}
                </p>

                {/* Button */}
                <button className="group relative px-8 py-3 rounded-full bg-linear-to-r from-pink-600 to-red-600 text-white font-semibold shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:scale-105 transition-all duration-300">
                  <span className="relative z-10">See more</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
