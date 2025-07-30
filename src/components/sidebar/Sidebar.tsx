'use client'
import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverServices, setHoverServices] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverGithub, setHoverGithub] = useState(false);
  const [hoverSocialMedia, setHoverSocialMedia] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setIsVisible(false);
      }

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 300); 

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div 
      className={`fixed z-[1000] left-6 max-[768px]:left-2 top-[50%] -translate-y-1/2 space-y-3 transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
    >

      {/* Home Option */}
      <div
        onMouseEnter={() => setHoverHome(true)}
        onMouseLeave={() => setHoverHome(false)}
        onClick={() => handleScroll("home")}
      >
        <div
          className={`flex items-center cursor-pointer transition-all duration-500 overflow-hidden
          ${hoverHome ? "bg-[#0662bb] text-white rounded-full w-[120px]" : "bg-gray-200 text-black rounded-[50px] w-[50px]"}`}
        >
          <div className="flex justify-center h-[50px] w-[50px] shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
              className={`transition-all duration-500 ${hoverHome ? "fill-white" : "fill-black"}`}
            >
              <path d="m16 8.41l-4.5-4.5L4.41 11H6v8h3v-6h5v6h3v-8h1.59L17 9.41V6h-1zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v8h-5v-6h-3v6H5v-8z" />
            </svg>
          </div>
          <p className={`transition-opacity duration-500 ${hoverHome ? "opacity-100" : "opacity-0 hidden"}`}>Home</p>
        </div>
      </div>

      {/* About Option */}
      <div
        onMouseEnter={() => setHoverAbout(true)}
        onMouseLeave={() => setHoverAbout(false)}
        onClick={() => handleScroll("about")}
      >
        <div
          className={`flex items-center cursor-pointer transition-all duration-500 overflow-hidden
          ${hoverAbout ? "bg-[#0662bb] text-white rounded-full w-[120px]" : "bg-gray-200 text-black rounded-[50px] w-[50px]"}`}
        >
          <div className="flex justify-center h-[50px] w-[50px] shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"
              className={`transition-all duration-500 ${hoverAbout ? "stroke-white" : "stroke-black"}`}
            >
              <circle cx="24" cy="24" r="21.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="35.77" cy="11.753" r="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="24" cy="24" r="13.186" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className={`transition-opacity duration-500 ${hoverAbout ? "opacity-100" : "opacity-0 hidden"}`}>About</p>
        </div>
      </div>

      {/* Services Option */}
      <div
        onMouseEnter={() => setHoverServices(true)}
        onMouseLeave={() => setHoverServices(false)}
        onClick={() => handleScroll("services")}
      >
        <div
          className={`flex items-center cursor-pointer transition-all duration-500 overflow-hidden
          ${hoverServices ? "bg-[#0662bb] text-white rounded-full w-[140px]" : "bg-gray-200 text-black rounded-[50px] w-[50px]"}`}
        >
          <div className="flex justify-center h-[50px] w-[50px] shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 4 48 48" strokeWidth='2' className={`transition-all duration-500 ${hoverServices ? "stroke-white" : "stroke-black"}`}>
              <circle cx="9.379" cy="38.621" r="3.879" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9.379" cy="24" r="3.879" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <rect width="25.064" height="7.758" x="17.436" y="34.742" fill="none" strokeLinecap="round" strokeLinejoin="round" rx="1.79" ry="1.79" />
              <rect width="25.064" height="7.758" x="17.436" y="20.121" fill="none" strokeLinecap="round" strokeLinejoin="round" rx="1.79" ry="1.79" />
            </svg>
          </div>
          <p className={`transition-opacity duration-500 ${hoverServices ? "opacity-100" : "opacity-0 hidden"}`}>Services</p>
        </div>
      </div>

      {/* GitHub Option */}
      <a href="https://github.com/Asadali52?tab=repositories" target="_blank" rel="noopener noreferrer" className="block">
        <div
          onMouseEnter={() => setHoverGithub(true)}
          onMouseLeave={() => setHoverGithub(false)}
        >
          <div
            className={`flex items-center cursor-pointer transition-all duration-500 overflow-hidden
          ${hoverGithub ? "bg-[#0662bb] text-white rounded-full w-[120px]" : "bg-gray-200 text-black rounded-[50px] w-[50px]"}`}
          >
            <div className="flex justify-center h-[50px] w-[50px] shrink-0 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className={`transition-all duration-500 ${hoverGithub ? "fill-white" : "fill-black"}`}>
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
              </svg>
            </div>
            <p className={`transition-opacity duration-500 ${hoverGithub ? "opacity-100" : "opacity-0 hidden"}`}>GitHub</p>
          </div>
        </div>
      </a>


      {/* Contact Option */}
      <div
        onMouseEnter={() => setHoverContact(true)}
        onMouseLeave={() => setHoverContact(false)}
        onClick={() => handleScroll("contact")}
      >
        <div
          className={`flex items-center cursor-pointer transition-all duration-500 overflow-hidden
          ${hoverContact ? "bg-[#0662bb] text-white rounded-full w-[130px]" : "bg-gray-200 text-black rounded-[50px] w-[50px]"}`}
        >
          <div className="flex justify-center h-[50px] w-[50px] shrink-0 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              className={`transition-all duration-500 fill-none ${hoverContact ? "stroke-white" : "stroke-black"}`}
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 13.34 13.34 0 0 0 .59 2.41 2 2 0 0 1-.45 2L8.91 10.09a16 16 0 0 0 6 6l1.91-1.91a2 2 0 0 1 2-.45 13.34 13.34 0 0 0 2.41.59A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <p className={`transition-opacity duration-500 ${hoverContact ? "opacity-100" : "opacity-0 hidden"}`}>Contact</p>
        </div>
      </div>

      {/* Social Media Option */}
      <div
        onMouseEnter={() => setHoverSocialMedia(true)}
        onMouseLeave={() => setHoverSocialMedia(false)}
      >
        <div
          className={`flex items-center cursor-pointer transition-all duration-500 whitespace-nowrap overflow-hidden
          ${hoverSocialMedia ? "bg-[#0662bb] text-white rounded-full w-[160px]" : "bg-gray-200 text-black rounded-[50px] w-[50px]"}`}
        >
          <div className="flex justify-center h-[50px] w-[50px] shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={`transition-all duration-500 ${hoverSocialMedia ? "stroke-white" : "stroke-black"}`}>
              <path strokeDasharray="28" strokeDashoffset="28" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 6l2 -2c1 -1 3 -1 4 0l1 1c1 1 1 3 0 4l-5 5c-1 1 -3 1 -4 0M11 18l-2 2c-1 1 -3 1 -4 0l-1 -1c-1 -1 -1 -3 0 -4l5 -5c1 -1 3 -1 4 0"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="28;0" /></path>
            </svg>
          </div>
          <p className={`transition-opacity duration-500 ${hoverSocialMedia ? "opacity-100" : "opacity-0 hidden"}`}>Social Media</p>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
