import React from 'react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 w-full text-black">
      <div className="text-2xl font-bold tracking-tighter">Injam Hossan.</div>
      
      <div className="hidden md:flex items-center gap-1 bg-black text-white px-2 py-2 rounded-full shadow-lg">
        {["Home", "About", "Portfolio", "Hobby", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-6 py-2 text-sm font-medium rounded-full hover:bg-zinc-800 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="md:hidden">
        {/* Mobile menu button placeholder */}
        <button className="p-2 text-black">☰</button>
      </div>

      <div className="hidden md:flex flex-1 justify-end max-w-50">
         <div className="relative w-full">
           <input 
             type="text" 
             placeholder="Search..." 
             className="w-full pl-4 pr-10 py-2 rounded-full bg-transparent border border-zinc-300 text-sm focus:outline-none focus:border-zinc-800 placeholder:text-zinc-500 transition-colors"
           />
           <svg 
             xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 24 24" 
             strokeWidth={1.5} 
             stroke="currentColor" 
             className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"
           >
             <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 5.196 5.196Z" />
           </svg>
         </div>
      </div>
    </nav>
  );
}
