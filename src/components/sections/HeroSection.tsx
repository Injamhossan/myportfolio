import Navbar from "@/components/layouts/Navbar";
import Banner from "@/components/sections/Banner";
import BannerBg from "@/assets/texture.jpg";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8">
      
      {/* HERO CARD */}
      <div
        className="relative w-full max-w-350 min-h-[85vh] bg-cover bg-center rounded-t-[3rem] rounded-br-[3rem] overflow-hidden shadow-2xl"
         style={{ backgroundImage: `url(${BannerBg.src})` }}
      >
        <Navbar />

        <main className="h-full">
          <Banner />
        </main>

        {/* CUTOUT */}
        <div className="absolute bottom-0 left-0 w-36 h-24 bg-black rounded-tr-[3rem]"></div>

        {/* CV BUTTON */}
        <div className="absolute bottom-6 left-8 z-20">
          <button className="bg-white px-6 py-2 rounded-full text-sm font-bold tracking-widest text-black shadow-md hover:scale-105 transition">
            CV
          </button>
        </div>
      </div>
    </div>
  );
}
