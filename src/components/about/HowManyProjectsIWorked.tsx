'use client'
import React, { useEffect, useState, useRef } from "react";

const HowManyProjectsIWorked = () => {

  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const elementRef = useRef(null);

  const targets = [132, 221, 1453, 7];
  const durations = [1000, 1200, 1500, 4000];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          targets.forEach((target, index) => {
            let start = 0;
            const duration = durations[index];
            const increment = Math.ceil(target / (duration / 50));

            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = target;
                  return updated;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = start;
                  return updated;
                });
              }
            }, 50);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-24 py-3 flex justify-between" ref={elementRef}>
      <div>
        <div className="h-[55px] w-[55px] rounded-full bg-[#0662bb] hover:bg-black transition-all duration-500 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="white" width="32" height="32" viewBox="0 0 24 24">
            <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
              <circle cx="12" cy="12" r="10" /><path d="M8 15a5 5 0 0 0 4 2a5 5 0 0 0 4-2M8.009 9H8m8 0h-.009" />
            </g>
          </svg>
        </div>
        <p className="font-[700] text-3xl mt-3">{counts[0]}</p>
        <p className="text-[18px]">Happy Clients</p>
      </div>
      <div>
        <div className="h-[55px] w-[55px] rounded-full bg-[#0662bb] hover:bg-black transition-all duration-500 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 12V6m-5 8V6m10 10V6M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3" />
          </svg>
        </div>
        <p className="font-[700] text-3xl mt-3">{counts[1]}</p>
        <p className="text-[18px]">Projects</p>
      </div>

      <div>
        <div className="h-[55px] w-[55px] rounded-full bg-[#0662bb] hover:bg-black transition-all duration-500 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd">
            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path fill="white" fillRule="nonzero" d="M12 2c5.517 0 10 4.445 10 9.943c0 1.362-.169 2.341-.426 3.133c-.611 1.882-1.874 3.465-3.302 4.8c-.982.918-2.439.778-3.314-.092c-1.242-1.235-1.582-3.152-.235-4.49l.92-.915a2.5 2.5 0 0 1 3.472-.05c.277.26.414.57.557.13c.181-.56.328-1.327.328-2.516C20 7.562 16.424 4 12 4s-8 3.562-8 7.943c0 1.19.147 1.955.328 2.516c.143.44.28.13.557-.13a2.5 2.5 0 0 1 3.472.05l.92.915c1.347 1.338 1.007 3.255-.235 4.49c-.875.87-2.332 1.01-3.314.093c-1.438-1.344-2.687-2.908-3.302-4.8C2.17 14.283 2 13.304 2 11.942C2 6.445 6.483 2 12 2m5.052 13.798c-.578.574-1.79 1.467-.92 2.333c.192.19.491.548.774.284c.638-.596 1.263-1.27 1.683-1.837c-.33-.31-1.026-1.287-1.537-.78m-10.104 0c-.51-.507-1.207.47-1.537.78c.42.567 1.045 1.24 1.683 1.837c.282.264.582-.093.774-.284c.87-.866-.342-1.759-.92-2.333" /></g>
          </svg>
        </div>
        <p className="font-[700] text-3xl mt-3">{counts[2]}</p>
        <p className="text-[18px]">Hours of Support</p>
      </div>

      <div>
        <div className="h-[55px] w-[55px] rounded-full bg-[#0662bb] hover:bg-black transition-all duration-500 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" strokeWidth={2} viewBox="0 0 48 48">
            <rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" rx="4" ry="4" />
            <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M32.75 19.5a4.25 4.25 0 0 1-4.25-4.25h0A4.25 4.25 0 0 0 24.25 11h-.5a4.25 4.25 0 0 0-4.25 4.25h0a4.25 4.25 0 0 1-4.25 4.25h0A4.25 4.25 0 0 0 11 23.75v.5a4.25 4.25 0 0 0 4.25 4.25h0a4.25 4.25 0 0 1 4.25 4.25h0A4.25 4.25 0 0 0 23.75 37h.5a4.25 4.25 0 0 0 4.25-4.25h0a4.25 4.25 0 0 1 4.25-4.25h0A4.25 4.25 0 0 0 37 24.25v-.5a4.25 4.25 0 0 0-4.25-4.25" />
            <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M33.37 27.005a4.25 4.25 0 0 1 0-6.01h0a4.25 4.25 0 0 0 0-6.01l-.354-.354a4.25 4.25 0 0 0-6.01 0h0a4.25 4.25 0 0 1-6.011 0h0a4.25 4.25 0 0 0-6.01 0l-.354.353a4.25 4.25 0 0 0 0 6.01h0a4.25 4.25 0 0 1 0 6.011h0a4.25 4.25 0 0 0 0 6.01l.353.354a4.25 4.25 0 0 0 6.01 0h0a4.25 4.25 0 0 1 6.011 0h0a4.25 4.25 0 0 0 6.01 0l.354-.353a4.25 4.25 0 0 0 0-6.01" />
          </svg>
        </div>
        <p className="font-[700] text-3xl mt-3">{counts[3]} years</p>
        <p className="text-[18px]">Experience</p>
      </div>
    </div>
  );
};

export default HowManyProjectsIWorked;
