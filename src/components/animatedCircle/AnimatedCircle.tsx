'use client';
import React, { useState } from "react";

const AnimatedCircle = () => {
  const [isRotating, setIsRotating] = useState(true);

  const handleStopRotation = () => {
    setIsRotating(prev => !prev);
  };

  return (
    <div className="grid h-[550px] grid-cols-2 gap-8 bg-gray-400 py-8 px-24">

      <div className="text-[18px] my-auto">
        <h6 className="text-4xl font-bold py-3">Skill</h6>
        <p>"I am a passionate UI developer with expertise in creating visually appealing and highly functional web interfaces. With strong skills in HTML, CSS, Tailwind CSS, JavaScript, and React, I build seamless user experiences. My proficiency extends to modern libraries like shadcn, Material-UI (MUI), Ant Design, Bootstrap, and Framer Motion, enabling me to deliver dynamic and interactive designs. I am dedicated to crafting innovative solutions that blend creativity with technical excellence."</p>
      </div>

      <div className="flex justify-center items-center relative">
        <div className="absolute text-center z-[100] w-[200px]">
          <p className="text-[17px]">
            "Skilled in HTML, CSS, JavaScript, React, and Tailwind CSS, I create seamless, responsive, and visually appealing user interfaces."
          </p>
          <button
            onClick={handleStopRotation}
            className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded-[40px] mt-3 hover:-translate-y-1 hover:shadow-md duration-500"
          >
            Click me
          </button>
        </div>

        <div
          className={`h-[360px] w-[360px] border-[2px] rounded-full z-[1] relative ${isRotating ? "animate-spin-slow" : ""
            }`}
        >
          <div className="items bottom-[100px] bg-gray-400 hover:bg-[#0662bb] cursor-pointer hover:border-[#0662bb] group transition-all duration-300 left-[-20px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20" className="fill-black group-hover:fill-white">
              <path d="M4 16v-2H2v2H1v-5h1v2h2v-2h1v5zm3 0v-4H5.6v-1h3.7v1H8v4zm3 0v-5h1l1.4 3.4h.1L14 11h1v5h-1v-3.1h-.1l-1.1 2.5h-.6l-1.1-2.5H11V16zm9 0h-3v-5h1v4h2zM9.4 4.2L7.1 6.5l2.3 2.3l-.6 1.2l-3.5-3.5L8.8 3zm1.2 4.6l2.3-2.3l-2.3-2.3l.6-1.2l3.5 3.5l-3.5 3.5z" />
            </svg>
          </div>

          <div className="items top-[30px] left-[15px] bg-gray-400 hover:bg-[#0662bb] cursor-pointer hover:border-[#0662bb] group transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="fill-black group-hover:fill-white">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9.446 17.412c.275 0 .581-.061.762-.132l.138.713c-.168.084-.546.174-1.037.174c-1.397 0-2.117-.869-2.117-2.021C7.191 14.768 8.175 14 9.398 14c.474 0 .833.096.995.18l-.186.726a2 2 0 0 0-.768-.149c-.726 0-1.29.438-1.29 1.337c.001.808.482 1.318 1.297 1.318m2.491.755c-.461 0-.917-.119-1.145-.245l.186-.756c.246.126.624.252 1.014.252c.42 0 .642-.174.642-.438c0-.252-.192-.396-.678-.57c-.672-.234-1.109-.605-1.109-1.193c0-.689.575-1.217 1.529-1.217c.455 0 .791.096 1.031.203l-.204.738a1.9 1.9 0 0 0-.846-.192c-.396 0-.587.181-.587.39c0 .258.228.372.749.57c.714.264 1.05.636 1.05 1.205c-.001.678-.523 1.253-1.632 1.253m3.24 0c-.461 0-.917-.119-1.145-.245l.186-.756c.246.126.624.252 1.014.252c.42 0 .642-.174.642-.438c0-.252-.192-.396-.678-.57c-.672-.234-1.109-.605-1.109-1.193c0-.689.575-1.217 1.529-1.217c.455 0 .791.096 1.031.203l-.204.738a1.9 1.9 0 0 0-.846-.192c-.396 0-.587.181-.587.39c0 .258.228.372.749.57c.714.264 1.05.636 1.05 1.205c0 .678-.523 1.253-1.632 1.253M14 9h-1V4l5 5z" />
            </svg>
          </div>

          <div className="items bottom-[100px] right-[-19px] bg-gray-400 hover:bg-[#0662bb] cursor-pointer hover:border-[#0662bb] group transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16" className="stroke-black group-hover:stroke-white">
              <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 10.8c4.14 0 7.5-1.25 7.5-2.8S12.14 5.2 8 5.2S.5 6.45.5 8s3.36 2.8 7.5 2.8" />
                <path d="M5.52 9.4c2.07 3.5 4.86 5.72 6.23 4.95c1.37-.78.8-4.24-1.27-7.75C8.41 3.1 5.62.88 4.25 1.65c-1.37.78-.8 4.24 1.27 7.75" />
                <path d="M5.52 6.6c-2.07 3.5-2.64 6.97-1.27 7.75c1.37.77 4.16-1.45 6.23-4.95s2.64-6.97 1.27-7.75C10.38.88 7.59 3.1 5.52 6.6" />
                <path d="M8.5 8a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5" />
              </g>
            </svg>
          </div>

          <div className="items bottom-[-25px] left-[150px] bg-gray-400 hover:bg-[#0662bb] cursor-pointer hover:border-[#0662bb] group transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="fill-black group-hover:fill-white">
              <path fillRule="evenodd" d="M7 9.969q1-4.063 5-4.063c4 0 4.5 3.047 6.5 3.555q2 .508 3.5-1.524Q21 12 17 12c-4 0-4.5-3.047-6.5-3.555Q8.5 7.938 7 9.97m-5 6.094Q3 12 7 12c4 0 4.5 3.047 6.5 3.555q2 .507 3.5-1.524q-1 4.063-5 4.063c-4 0-4.5-3.047-6.5-3.555q-2-.508-3.5 1.524" clipRule="evenodd" />
            </svg>
          </div>

          <div className="items right-[65px] top-[-5px] bg-gray-400 hover:bg-[#0662bb] cursor-pointer hover:border-[#0662bb] group transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" className="fill-black group-hover:fill-white">
              <path d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Zm-12.17 149.58a18.89 18.89 0 0 1-8.31 13.81c-4.82 3.19-10.87 4.14-16.36 4.14a59 59 0 0 1-14.68-2a6 6 0 0 1 3.23-11.56c3.71 1 15.58 3.11 21.19-.62a6.85 6.85 0 0 0 3-5.34c.58-4.43-2.08-6.26-14.2-9.76c-9.31-2.69-23.37-6.75-21.57-20.94a18.61 18.61 0 0 1 8.08-13.54c11.11-7.49 29.18-3 31.21-2.48a6 6 0 0 1-3.06 11.6c-3.78-1-15.85-3-21.45.84a6.59 6.59 0 0 0-2.88 5.08c-.41 3.22 2.14 4.78 13 7.91c9.89 2.89 24.81 7.2 22.8 22.86M78 152v38a24 24 0 0 1-48 0a6 6 0 0 1 12 0a12 12 0 0 0 24 0v-38a6 6 0 0 1 12 0" />
            </svg>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AnimatedCircle;
