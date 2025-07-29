import React from 'react';
import Image from 'next/image';

import VisionImg from "@/assests/pngs/our-vision-and-mission.png";

const OurVisionAndMission = () => {

  return (
    <div>

      <div className="grid grid-cols-2 gap-10 max-[900px]:gap-6 max-[768px]:grid-cols-1">
        <div className='text-left my-auto text-[15px] max-[1024px]:text-[14px] text-[#000] max-[768px]:text-[13px] max-[530px]:text-[12px] order-[1]'>
          <h5 className='font-[700] text-[24px]'>My Vision & Mission</h5>
          <p className='mt-4'><span className='font-bold'>Vision:</span>
            To become a leading developer who creates exceptional digital experiences that not only meet client expectations but exceed them. I envision a future where every project I touch transforms into an engaging, user-centric solution that drives business growth and user satisfaction. Through continuous learning and innovation, I aim to push the boundaries of web development while maintaining the highest standards of code quality and design excellence.
          </p>
          <p className='mt-4 max-[1180px]:hidden'><span className='font-bold'>Mission:</span>
            My mission is to deliver cutting-edge web solutions that combine technical expertise with creative design thinking. I strive to build responsive, performant, and accessible applications that provide seamless user experiences across all devices. By staying current with emerging technologies and best practices, I ensure that every project leverages the most effective tools and methodologies to achieve optimal results for clients and end-users alike.
          </p>
        </div>
        <div className="flex justify-center items-center max-[768px]:justify-start">
          <Image src={VisionImg} alt="img" className='w-full rounded-[10px] max-[1023px]:w-[90%] max-[768px]:w-full' />
        </div>
      </div>

      <p className='mt-6 max-[768px]:mt-3 text-[15px] max-[1024px]:text-[14px] text-[#000] max-[768px]:text-[13px] max-[530px]:text-[12px] text-left hidden max-[1180px]:block'><span className='font-bold'>Mission:</span>
        My mission is to deliver cutting-edge web solutions that combine technical expertise with creative design thinking. I strive to build responsive, performant, and accessible applications that provide seamless user experiences across all devices. By staying current with emerging technologies and best practices, I ensure that every project leverages the most effective tools and methodologies to achieve optimal results for clients and end-users alike.
      </p>

    </div>
  );
};
export default OurVisionAndMission;