import Image from "next/image";
import Profile from "@/assets/Profile.png"; // Assuming we can reuse this, strictly for the "About me" image.

const timeline = [
  {
    role: "Software engineering",
    period: "2020-now",
    desc: "Designing, developing and enhancing fullstack applications. Setting up databases and automating processes.",
    dotColor: "bg-blue-600",
    lineColor: "from-blue-600 to-pink-600"
  },
  {
    role: "Fullstack training at IBA",
    period: "2020",
    desc: "Java, Spring boot + JS, React, Redux",
    dotColor: "bg-pink-600",
    lineColor: "from-pink-600 to-red-600"
  },
  {
    role: "BSUIR",
    period: "2020-2024",
    desc: "Bachelors at Computer systems and networks",
    dotColor: "bg-red-600",
    lineColor: "bg-red-600"
  },
];

export default function AboutSection() {
  return (
    <section className="bg-black text-white w-full py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-16 overflow-hidden">
      
      {/* Left: Image with Blob Background */}
      <div className="relative w-full max-w-md flex justify-center">
        {/* Blob Background - using a rough shape */}
        <div className="absolute top-10 left-0 w-full h-[110%] bg-white rounded-[40%_60%_70%_30%/40%_50%_60%_50%] z-0 transform -rotate-6"></div>
        
        {/* Helper visual for the "torn paper" or textured look if needed, simple blob for now */}
        
        <div className="relative z-10 w-[85%] grayscale contrast-125 hover:grayscale-0 transition-all duration-500">
           {/* Placeholder for the person holding cat. Using Profile for now. */}
           <Image 
             src={Profile} 
             alt="About Me" 
             className="object-contain drop-shadow-2xl"
           />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full max-w-2xl space-y-12">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
          About me
        </h2>

        <div className="space-y-8 relative">
           {/* Timeline Line (Background) - connecting dots */}
            {/* This is complex because of gradients. We'll do individual lines between dots. */}

          {timeline.map((item, index) => (
             <div key={index} className="flex gap-6 group">
                {/* Timeline Column */}
                <div className="flex flex-col items-center">
                   {/* Dot */}
                   <div className={`w-4 h-4 rounded-full ${item.dotColor} z-10 group-hover:scale-125 transition-transform duration-300`}></div>
                   
                   {/* Line connecting to next - only if not last */}
                   {index !== timeline.length - 1 && (
                     <div className={`w-0.5 h-full mt-2 bg-gradient-to-b ${item.lineColor}`}></div>
                   )}
                </div>

                {/* Text Content */}
                <div className="flex-1 pb-8">
                   <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                      <h3 className="text-2xl font-semibold mb-1 md:mb-0">{item.role}</h3>
                      <span className="text-zinc-500 text-sm font-medium">{item.period}</span>
                   </div>
                   <p className="text-zinc-400 leading-relaxed max-w-lg">
                      {item.desc}
                   </p>
                </div>
             </div>
          ))}
        </div>
      </div>

    </section>
  );
}
