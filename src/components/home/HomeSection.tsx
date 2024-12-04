'use client'
import React, { useEffect, useState, useMemo } from "react";

const HomeSection = () => {

  const roles = useMemo(() => ["Developer", 'Freelancer'], []);

  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [backdropClass, setBackdropClass] = useState("translate-x-[-100%]");
  const [contentClass, setContentClass] = useState('translate-x-[-250%]');
  const [secialIconsClass, setSocialIconsClass] = useState("translate-y-[550%]");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const fullRole = roles[roleIndex];

      if (!isDeleting && charIndex < fullRole.length) {
        setCurrentRole(fullRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(fullRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === fullRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
        clearInterval(typingInterval);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 100 : 150);

    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, roleIndex, roles]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    setBackdropClass("translate-x-0 transition-transform duration-[1s]");
    setContentClass("translate-x-0 transition-transform duration-[1s]");
    setSocialIconsClass("translate-y-0 transition-transform duration-[1s]");

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1732730224448-4d964e7d99fc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
    >
      <h2 className="absolute cursor-pointer z-[1] top-8 left-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-3xl md:text-5xl font-bold">
        Portfolio
      </h2>

      <div className={`absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md ${backdropClass}`} />

      <div className={`relative text-center text-white ${contentClass}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Asad Ali</h1>
        <p className="text-2xl md:text-4xl">
          I’m a{" "}
          <span className="font-bold">
            {currentRole}
            <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
          </span>
        </p>
      </div>

      <div className={`mt-4 flex gap-3 relative ${secialIconsClass}`}>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="bg-white rounded-[3px]" viewBox="0 0 256 256">
          <path fill="#0a66c2" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
          <g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" />
            <rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" />
            <path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334" /><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fd5" /><stop offset=".1" stopColor="#fd5" /><stop offset=".5" stopColor="#ff543e" />
              <stop offset="1" stopColor="#c837ab" />
            </radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3771c8" /><stop offset=".128" stopColor="#3771c8" />
                <stop offset="1" stopColor="#60f" stopOpacity="0" /></radialGradient>
            </defs></g>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
            <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109" />
            <path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193" />
          </g>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
          <path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
          <path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" />
        </svg>
      </div>
    </div>
  );
};

export default HomeSection;
