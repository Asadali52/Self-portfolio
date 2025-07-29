"use client";
import React from "react";
import Image from "next/image";
import FacebookIcon from "@/assests/svgs/facebook-svg.svg";
import InstagramIcon from "@/assests/svgs/instagram-svg.svg";
import TwitterIcon from "@/assests/svgs/twitter-svg.svg";
import LinkedInIcon from "@/assests/svgs/linkedin-svg.svg";
import HorizontalLine from "@/assests/svgs/Horizontal-line-footr.svg";
import RightArrow from "@/assests/svgs/right-arrow.svg";
import EmailSendIcon from "@/assests/svgs/send-email-svg.svg";

const Footer = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5F5F7] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-gray-200">

          {/* Personal Branding */}
          <div className="lg:col-span-1">
            <h1 className="text-[#012641] leading-tight text-2xl sm:text-3xl lg:text-4xl font-[800] mb-4">Asad Ali</h1>
            <p className="text-sm sm:text-base text-[#000] mb-6 leading-relaxed">
              Passionate developer and freelancer specializing in creating exceptional web experiences with modern technologies and innovative design solutions.
            </p>
            <div className="flex items-center gap-3">
              <Image src={FacebookIcon} alt="Facebook" className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7" />
              <Image src={InstagramIcon} alt="Instagram" className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7" />
              <Image src={TwitterIcon} alt="Twitter" className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7" />
              <Image src={LinkedInIcon} alt="LinkedIn" className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7" />
            </div>
          </div>

          {/* Portfolio Navigation */}
          <div className="space-y-3 text-sm sm:text-base text-[#000]">
            <div className="flex items-center gap-3 mb-4">
              <p className="text-lg sm:text-xl font-[500]">Portfolio</p>
              <Image src={HorizontalLine} alt="" className="w-16 sm:w-20" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Image src={RightArrow} alt="" className="w-3 h-3" />
                <p className="cursor-pointer hover:text-[#012641] transition-colors" onClick={() => scrollToSection('home')}>Home</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={RightArrow} alt="" className="w-3 h-3" />
                <p className="cursor-pointer hover:text-[#012641] transition-colors" onClick={() => scrollToSection('about')}>About</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={RightArrow} alt="" className="w-3 h-3" />
                <p className="cursor-pointer hover:text-[#012641] transition-colors" onClick={() => scrollToSection('services')}>Services</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={RightArrow} alt="" className="w-3 h-3" />
                <p className="cursor-pointer hover:text-[#012641] transition-colors" onClick={() => scrollToSection('projects')}>Projects</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={RightArrow} alt="" className="w-3 h-3" />
                <p className="cursor-pointer hover:text-[#012641] transition-colors" onClick={() => scrollToSection('contact')}>Contact</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3 text-sm sm:text-base text-[#000]">
            <div className="flex items-center gap-3 mb-4">
              <p className="text-lg sm:text-xl font-[500]">Services</p>
              <Image src={HorizontalLine} alt="" className="w-16 sm:w-20" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Image src={RightArrow} alt="" className="w-3 h-3" />
                <p className="footer-translate-class">Custom UI Development</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={RightArrow} alt="" className="w-3 h-3" />
                <p className="footer-translate-class">Interactive Web Apps</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={RightArrow} alt="" className="w-3 h-3" />
                <p className="footer-translate-class">Responsive Design</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={RightArrow} alt="" className="w-3 h-3" />
                <p className="footer-translate-class">Performance Optimization</p>
              </div>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="space-y-4 text-sm sm:text-base text-[#000]">
            <div className="flex items-center gap-3 mb-4">
              <p className="text-lg sm:text-xl font-[500]">Get In Touch</p>
              <Image src={HorizontalLine} alt="" className="w-16 sm:w-20" />
            </div>
            <div className="relative w-full max-w-xs">
              <input 
                type="email" 
                placeholder="Your email..." 
                className="h-12 w-full pl-4 pr-16 focus:outline-none border border-gray-300 rounded-full text-sm"
              />
              <span className="w-12 h-12 rounded-full flex justify-center items-center bg-[#012641] absolute right-0 top-0 cursor-pointer">
                <Image src={EmailSendIcon} alt="Send" className="w-5 h-5" />
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Available for freelance opportunities</p>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm text-[#000]">
            <p>© 2024 Asad Ali | All Rights Reserved</p>
            <p>Terms & Condition | Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;