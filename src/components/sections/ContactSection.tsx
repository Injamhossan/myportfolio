import Image from "next/image";
// Using Profile as placeholder for the cat since image generation failed
import CatPlaceholder from "@/assets/Profile.png"; 

export default function ContactSection() {
  return (
    <section className="bg-black text-white w-full py-20 px-6 md:px-16 overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* LEFT COMPONENT (Heading + Image) */}
        <div className="flex-1 w-full max-w-lg relative">
           <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">
             Contact me
           </h2>

           <div className="relative">
             {/* "Cat" Image Area */}
             <div className="relative w-full aspect-4/5 md:aspect-square overflow-hidden rounded-bl-[100px] bg-linear-to-b from-transparent to-purple-900/20">
                <Image 
                  src={CatPlaceholder} 
                  alt="My friend waiting for your letters" 
                  className="object-cover opacity-80 mix-blend-lighten mask-image-gradient"
                />
             </div>

             {/* Handwritten Note Style */}
             <div className="absolute top-1/2 -right-8 md:-right-16 text-zinc-300 font-handwriting -rotate-6 hidden md:block">
                <p className="text-xl max-w-37.5 leading-tight">My friend is waiting for your letters</p>
                {/* Simple SVG Arrow */}
                <svg className="w-10 h-10 mt-2 ml-4 text-zinc-400" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M40 5 C 30 20, 10 20, 5 40 M 5 40 L 15 35 M 5 40 L 12 48" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
           </div>
        </div>

        {/* RIGHT COMPONENT (Form Card) */}
        <div className="flex-1 w-full max-w-xl">
           <div className="bg-[#111111] border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              
              {/* Subtle glows inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="text-center md:text-left">
                   <h3 className="text-2xl font-bold mb-1">Get in touch today</h3>
                </div>

                <form className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-2">
                       <label className="text-sm text-zinc-400 font-medium ml-1">Name</label>
                       <input 
                         type="text" 
                         placeholder="Injam Hossan" 
                         className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
                       />
                    </div>
                    <div className="flex-1 space-y-2">
                       <label className="text-sm text-zinc-400 font-medium ml-1">E-mail</label>
                       <input 
                         type="email" 
                         placeholder="injam.web@gmail.com" 
                         className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
                       />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm text-zinc-400 font-medium ml-1">Leave us a message</label>
                     <textarea 
                       rows={4} 
                       placeholder="Please type your message here..." 
                       className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-600 resize-none focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
                     ></textarea>
                  </div>

                  <div className="pt-2 flex justify-end">
                     <button type="button" className="bg-white text-black px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300">
                        Send message
                     </button>
                  </div>
                </form>
              </div>
           </div>
        </div>

      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-purple-900/10 via-transparent to-transparent blur-[120px] pointer-events-none -z-10"></div>

    </section>
  );
}
