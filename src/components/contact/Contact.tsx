'use client'
import React, { useState, useEffect, useRef } from "react";

const Contact = () => {

  const [email, setEmail] = useState("");
  const [borderColor, setBorderColor] = useState("focus:border-blue-500");
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contactElement = contactRef.current;
    if (contactElement) {
      contactElement.classList.add("animate-contact");
    }
  }, []);

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);

    if (value.endsWith("@gmail.com")) {
      setBorderColor("border-green-500");
    } else if (value) {
      setBorderColor("border-red-500 border-2");
    } else {
      setBorderColor("focus:border-blue-500");
    }
  };

  return (
    <div ref={contactRef} className=" opacity-0 translate-y-10 transition-all duration-700 py-4">

      <h5 className="text-4xl font-bold text-center py-2">Contact</h5>

      <div className="grid grid-cols-3 gap-10 max-[1024px]:grid-cols-1">

        <div className="space-y-6">

          <div className="flex items-center gap-6 group">
            <div className="h-[60px] w-[60px] rounded-full bg-[rgb(240,248,255)] flex justify-center items-center group-hover:bg-[#0662bb] transition-all duration-700 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" strokeWidth={2} className="stroke-[#0662bb] group-hover:stroke-white transition-all duration-700" viewBox="0 0 48 48">
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M24 4.5A14.82 14.82 0 0 0 9.18 19.32h0v1.08c.6 8.12 7.34 14.65 14.82 23.1c7.81-8.82 14.82-15.5 14.82-24.18h0A14.82 14.82 0 0 0 24 4.5m0 7.7a7.13 7.13 0 1 1-7.13 7.12A7.13 7.13 0 0 1 24 12.2" />
              </svg>
            </div>
            <div className="">
              <h4 className="font-bold text-xl">Address</h4>
              <p className="text-[14px]">New City Kasur, Pakistan</p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="h-[60px] w-[60px] rounded-full bg-[rgb(240,248,255)] flex justify-center items-center group-hover:bg-[#0662bb] transition-all duration-700 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" className="fill-[#0662bb] group-hover:fill-white transition-all duration-700" viewBox="0 0 24 24" >
                <path d="m7.057 2.418l1.167-.351a2.75 2.75 0 0 1 3.302 1.505l.902 2.006a2.75 2.75 0 0 1-.633 3.139L10.3 10.11a.25.25 0 0 0-.078.155c-.044.397.225 1.17.846 2.245c.45.781.859 1.33 1.206 1.637c.243.215.376.261.433.245l2.01-.615a2.75 2.75 0 0 1 3.034 1.02l1.28 1.776a2.75 2.75 0 0 1-.338 3.605l-.887.84a3.75 3.75 0 0 1-3.587.889c-2.754-.769-5.223-3.093-7.435-6.924C4.57 11.147 3.792 7.843 4.51 5.07a3.75 3.75 0 0 1 2.548-2.652m.433 1.437a2.25 2.25 0 0 0-1.53 1.59c-.602 2.332.087 5.261 2.123 8.788c2.034 3.522 4.223 5.583 6.54 6.23a2.25 2.25 0 0 0 2.152-.534l.886-.84a1.25 1.25 0 0 0 .154-1.639l-1.28-1.775a1.25 1.25 0 0 0-1.38-.464l-2.015.617c-1.17.348-2.231-.593-3.371-2.568c-.77-1.33-1.128-2.36-1.038-3.161c.046-.416.24-.8.545-1.086l1.495-1.393a1.25 1.25 0 0 0 .287-1.427l-.901-2.006a1.25 1.25 0 0 0-1.501-.684z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-xl">Call Us</h4>
              <p className="text-[14px]">03211722052</p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="h-[60px] w-[60px] rounded-full bg-[rgb(240,248,255)] flex justify-center items-center group-hover:bg-[#0662bb] transition-all duration-700 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="fill-[#0662bb] group-hover:fill-white transition-all duration-700" viewBox="0 0 24 24">
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-xl">Email Us</h4>
              <p className="text-[14px]">itsasadali5@gmail.com</p>
            </div>
          </div>

        </div>

        <div className="col-span-2">
          <div className="grid grid-cols-2 max-[768px]:grid-cols-1 gap-5 pt-3">
            <input
              type="text"
              className="border w-full focus:outline-none px-2 h-[45px] text-[14px] focus:border-blue-500"
              placeholder="Enter Name"
            />
            <input
              type="text"
              value={email}
              onChange={handleInputChange}
              className={`border w-full px-2 h-[45px] text-[14px] focus:outline-none ${borderColor}`}
              placeholder="Enter email"
            />
          </div>
          <textarea
            className="border focus:outline-0 mt-4 w-full text-[14px] h-[150px] px-2 py-1"
            placeholder="Your message"
          ></textarea>
          <p className="bg-[#0662bb] text-white w-[200px] mx-auto mt-4 text-center py-3 cursor-pointer hover:bg-black hover:-translate-y-1 hover:shadow transition-all duration-700 rounded-[40px]">Send Message</p>
        </div>

      </div>

    </div>
  );
};

export default Contact;
