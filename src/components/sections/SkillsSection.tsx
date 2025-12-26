import { 
  SiTypescript, SiAdobephotoshop, SiAdobepremierepro, SiAdobelightroom, SiAdobeillustrator, SiNodedotjs,
  SiReact, SiSvelte, SiAdobeaftereffects, SiFigma, SiStrapi, SiPostgresql, 
  SiNextdotjs, SiJavascript, SiRedux, SiRedis, SiGo, SiMongodb 
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string; // Tailwind color class backbone for border/shadow
  customColor?: string; // Hex for precise control if needed
}

const skills: Skill[] = [
  { name: "TypeScript", icon: SiTypescript, color: "blue-500", customColor: "#3178C6" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "blue-600", customColor: "#31A8FF" },
  { name: "Premiere", icon: SiAdobepremierepro, color: "purple-600", customColor: "#9999FF" },
  { name: "Lightroom", icon: SiAdobelightroom, color: "cyan-600", customColor: "#31A8FF" },
  { name: "Illustrator", icon: SiAdobeillustrator, color: "orange-600", customColor: "#FF9A00" },
  { name: "Node.js", icon: SiNodedotjs, color: "green-500", customColor: "#339933" },
  
  { name: "React", icon: SiReact, color: "cyan-400", customColor: "#61DAFB" },
  { name: "Svelte", icon: SiSvelte, color: "orange-500", customColor: "#FF3E00" },
  { name: "After Effects", icon: SiAdobeaftereffects, color: "purple-700", customColor: "#9999FF" },
  { name: "Figma", icon: SiFigma, color: "purple-400", customColor: "#F24E1E" }, // Figma has multiple colors, picking one
  { name: "Strapi", icon: SiStrapi, color: "indigo-500", customColor: "#2F2E8B" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "blue-400", customColor: "#336791" },
  
  { name: "Next.js", icon: SiNextdotjs, color: "white", customColor: "#FFFFFF" },
  { name: "JavaScript", icon: SiJavascript, color: "yellow-400", customColor: "#F7DF1E" },
  { name: "Redux", icon: SiRedux, color: "purple-600", customColor: "#764ABC" },
  { name: "Redis", icon: SiRedis, color: "red-600", customColor: "#DC382D" },
  { name: "Go", icon: SiGo, color: "cyan-500", customColor: "#00ADD8" },
  { name: "MongoDB", icon: SiMongodb, color: "green-500", customColor: "#47A248" },
];

export default function SkillsSection() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className="text-5xl md:text-6xl font-bold mb-16 tracking-tight">
          My skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-black border-2 transition-all duration-300 hover:scale-105"
              style={{ 
                borderColor: skill.customColor,
                boxShadow: `0 0 10px ${skill.customColor}40` // semi-transparent glow static
              }}
            >
              {/* Stronger glow on hover via CSS injection or inline style change */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: `0 0 20px ${skill.customColor}, inset 0 0 10px ${skill.customColor}40`
                }}
              ></div>

              <div className="z-10 flex flex-col items-center gap-3">
                <skill.icon 
                  className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110" 
                  style={{ color: skill.customColor }}
                />
                <span className="text-sm font-medium tracking-wide text-zinc-300 group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
