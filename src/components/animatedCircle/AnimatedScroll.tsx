import React from "react";
import Image from "next/image";

import BrandOne from "@/assests/pngs/scroll-ride-img.png";
import BrandTwo from "@/assests/pngs/scroll-food-img.png";
import BrandSix from "@/assests/pngs/scroll-welness-img.png";
import BrandFour from "@/assests/pngs/scroll-travel-img.png";
import BrandFive from "@/assests/pngs/scroll-ecommerce-img.png";
import BrandThree from "@/assests/pngs/scroll-real-state-img.png";
import BrandSeven from "@/assests/pngs/scroll-home-img.png";

const AnimatedScroll = () => {
  const Images = [
    { img: BrandOne, title: "Ride" },
    { img: BrandTwo, title: "Food" },
    { img: BrandThree, title: "Real Estate" },
    { img: BrandFour, title: "Travel" },
    { img: BrandFive, title: "E-commerce" },
    { img: BrandSix, title: "Wellness" },
    { img: BrandSeven, title: "Home" },
  ];

  return (
    <div className="mb-5 mt-10">
      <div className="border-t border-b overflow-hidden relative">
        <div className="scroll-container bg-[#F5F5F7] py-4 max-[1023px]:py-3 max-[768px]:py-2">
          <div className="flex gap-5 max-[900px]:gap-2 items-center animate-scroll">
            {Images.map((image, index) => (
              <div className="bg-white rounded-[10px] flex-shrink-0 flex items-center gap-3 max-[590px]:gap-2 p-3 max-[1023px]:p-2 overflow-hidden" key={index}>
                <div className="flex-shrink-0 rounded-full overflow-hidden">
                  <Image src={image.img} alt={image.title} width={40} height={50} />
                </div>
                <p className="whitespace-nowrap text-[14px] max-[1023px]:text-[12px]">{image.title}</p>
              </div>
            ))}
            {Images.map((image, index) => (
              <div className="bg-white rounded-[10px] flex-shrink-0 flex items-center gap-3 max-[590px]:gap-2 p-3 max-[1023px]:p-2 overflow-hidden" key={index + Images.length}>
                <div className="flex-shrink-0 rounded-full overflow-hidden">
                  <Image src={image.img} alt={image.title} width={40} height={50} />
                </div>
                <p className="whitespace-nowrap text-[14px] max-[1023px]:text-[12px]">{image.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedScroll;
