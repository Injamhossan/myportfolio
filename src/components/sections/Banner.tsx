import Image from "next/image";
import Profile from "@/assets/Profile.png";

export default function Banner() {
  return (
    <section className="relative flex flex-col md:flex-row h-full px-8 md:px-16 pt-28 md:pt-0">

      {/* LEFT */}
      <div className="flex-1 flex flex-col justify-center text-black max-w-xl">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95]">
          Injam <br /> Hossan.
        </h1>

        <p className="mt-4 text-xs md:text-base font-bold tracking-widest text-zinc-500 uppercase">
          Software Engineer | Full-stack Developer
        </p>

        <p className="mt-4 text-base md:text-lg text-zinc-600">
          With impeccable experience from concept to layout, I bring your ideas to life with clean code.
        </p>

        <button className="mt-6 w-fit bg-linear-to-r from-pink-600 to-purple-600 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
          Learn more
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex-1 hidden md:flex items-end justify-end">
        <div className="absolute right-8 bottom-0 w-95 h-95 bg-zinc-300/60 rounded-full blur-3xl"></div>

        <div className="relative w-90 xl:w-105">
          <Image src={Profile} alt="Profile" priority />
        </div>
      </div>

      {/* MOBILE IMAGE */}
      <div className="md:hidden flex justify-center mt-12">
        <div className="w-55">
          <Image src={Profile} alt="Profile" />
        </div>
      </div>
    </section>
  );
}
