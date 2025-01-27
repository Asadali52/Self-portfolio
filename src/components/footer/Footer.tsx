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

  return (
    <div className="bg-[#F5F5F7] whitespace-nowrap text-left px-24 max-[768px]:px-16">
      <div className="grid grid-cols-4 py-12 border-b max-[920px]:grid-cols-2 max-[435px]:grid-cols-1 gap-x-10 max-[900px]:gap-x-4 gap-y-8 max-[425px]:gap-y-4 whitespace-nowrap px-32 max-[1023px]:px-10 max-[768px]:px-6 max-[425px]:px-3 ">

        <div className="">
          <h1 className="text-[#012641] leading-[30px] text-[42px] font-[800] whitespace-nowrap">Company</h1>
          <p className="text-[14px] mt-6 text-[#000] max-[768px]:text-[13px] whitespace-normal w-[80%] max-[530px]:text-[12px]">Join Our Business Circle and unlock endless possibilities to earn, save, and grow.</p>
          <div className="flex items-center gap-3 mt-4">
            <Image src={FacebookIcon} alt="" className="cursor-pointer" />
            <Image src={InstagramIcon} alt="" className="cursor-pointer" />
            <Image src={TwitterIcon} alt="" className="cursor-pointer" />
            <Image src={LinkedInIcon} alt="" className="cursor-pointer" />
          </div>
        </div>

        <div className="space-y-2 text-[15px] text-[#000] max-[1023px]:text-[14px] max-[768px]:text-[13px] max-[530px]:text-[12px]">
          <div className="flex items-center gap-3 max-[550px]:gap-2 mb-4">
            <p className="text-[18px] font-[500]">Main Page</p>
            <Image src={HorizontalLine} alt="" />
          </div>
          <div className="flex items-center gap-3">
            <Image src={RightArrow} alt="" />
            <p className="inline cursor-pointer footer-translate-class">What is Company</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={RightArrow} alt="" />
            <p className="inline cursor-pointer footer-translate-class">How it works</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={RightArrow} alt="" />
            <p className="inline cursor-pointer footer-translate-class">Ambassadors</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={RightArrow} alt="" />
            <p className="inline cursor-pointer footer-translate-class">Services categories</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={RightArrow} alt="" />
            <p className="inline cursor-pointer footer-translate-class">Contact</p>
          </div>
        </div>

        <div className="space-y-2 text-[15px] text-[#000] max-[1023px]:text-[14px] max-[768px]:text-[13px] max-[530px]:text-[12px]">
          <div className="flex items-center gap-3 max-[550px]:gap-2 mb-4">
            <p className="text-[18px] font-[500]">Quick Links</p>
            <Image src={HorizontalLine} alt="" />
          </div>
          <div className="flex items-center gap-3">
            <Image src={RightArrow} alt="" />
            <p className="inline cursor-pointer footer-translate-class">About</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={RightArrow} alt="" />
            <p className="inline cursor-pointer footer-translate-class">Support</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={RightArrow} alt="" />
            <p className="inline cursor-pointer footer-translate-class">FAQ’s</p>
          </div>
        </div>

        <div className="space-y-2 mx-auto max-[920px]:mx-0 text-[15px] text-[#000] max-[1023px]:text-[14px] max-[768px]:text-[13px] max-[530px]:text-[12px]">
          <div className="flex items-center gap-3 max-[550px]:gap-2 mb-4">
            <p className="text-[18px] font-[500]">Join For Updates</p>
            <Image src={HorizontalLine} alt="" />
          </div>
          <div className="relative w-[200px]">
            <input type="email" placeholder="Your email..." className="h-[50px] w-full pl-4 pr-20 focus:outline-none border border-[#696969] rounded-full" />
            <span className="w-[60px] h-[50px] rounded-full flex justify-center items-center bg-[#012641] absolute right-0 top-0 cursor-pointer">
              <Image src={EmailSendIcon} alt="" />
            </span>
          </div>
        </div>

      </div>

      <div className="text-[14px] whitespace-nowrap px-32 max-[1023px]:px-10 max-[768px]:px-6 max-[425px]:px-3 text-[#000] max-[768px]:text-[13px] max-[435px]:flex-col max-[530px]:text-[12px] flex justify-between gap-x-4 gap-y-2 py-5">
        <p className="inline cursor-pointer">© Com 2024 | All Rights Reserved</p>
        <p className="inline cursor-pointer">Terms & Condition | Privacy Policy</p>
      </div>
    </div>
  );
};
export default Footer;