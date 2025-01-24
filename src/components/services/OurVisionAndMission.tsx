import React from 'react';
import Image from 'next/image';

import VisionImg from "@/assests/pngs/our-vision-and-mission.png";

const OurVisionAndMission = () => {

  return (
    <div className='py-5'>

      <div className="grid grid-cols-2 gap-10 max-[900px]:gap-6 max-[768px]:grid-cols-1">
        <div className='text-left my-auto text-[15px] max-[1024px]:text-[14px] text-[#000] max-[768px]:text-[13px] max-[530px]:text-[12px] order-[1]'>
          <h5 className='font-[700] text-[24px]'>Our Vision & Mission</h5>
          <p className='mt-4'><span className='font-bold'>Vision:</span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praum repellat nobis ame olestiae debitis expedita accusantium quibusdam eum itaque sunt temporibus harum pariatur modi consequuntur quis laudantium, inventore ex, amet odio aspernatur ipsum vel. Iure odio dolor culpa reprehenderit blanditiis ex asperiores deserunt. Est numquam fugit consequuntur nihil nulla qui quas officia unde excepturi deleniti itaque, optio, sapiente debitis, ullam quo! Fugiat, aliquam eum tempore quibusdam quam molestias officiis est beatae numquam distinctio sed iste deleniti earum debitis facere quia id autem delectus illo incidunt corporis!
          </p>
          <p className='mt-4 max-[1180px]:hidden'><span className='font-bold'>Mission:</span>
            Lorem ipsum dolor sit amet consectetur ue? A reprehenderit reiciendis, offic laboriosam facere minus asperiores quo velit architecto suscipit eum voluptatem est mollitia placeat neque, iusto vel quasi perspiciatis, doloremque ab voluptates beatae molestiae. Aliquid provident quisquam itaque molestias ipsam doloremque. Doloremque voluptates aspernatur facere corrupti ab quidem minima accusamus ullam incidunt, assumenda hic temporibus blanditiis voluptatum exercitationem delectus quod, earum magni, quae ipsa minus odit. Error distinctio aspernatur, iure minima quod ratione voluptatem accusantium est neque illum dolor fugiat et beatae? Porro, distinctio at! Earum!          </p>
        </div>
        <div className="flex justify-center items-center max-[768px]:justify-start">
          <Image src={VisionImg} alt="img" className='w-full rounded-[10px] max-[1023px]:w-[90%] max-[768px]:w-full' />
        </div>
      </div>

      <p className='mt-6 max-[768px]:mt-3 text-[15px] max-[1024px]:text-[14px] text-[#000] max-[768px]:text-[13px] max-[530px]:text-[12px] text-left hidden max-[1180px]:block'><span className='font-bold'>Mission:</span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur faiandae debitis delectus veritatis, ratione animi, natus doloremque, unde eius error laborum. Totam magni sint, nisi voluptatibus nulla, earum similique vitae culpa quo quia nobis temporibus cumque obcaecati recusandae cupiditate et soluta dolorem rerum enim, ab inventore nemo perferendis voluptatum quos. Reiciendis fugit aliquid a commodi quaerat quibusdam atque facere voluptate ab. Quos alias error dolor facere suscipit, vero ipsam consequatur dolorem, eum commodi excepturi maxime quis quia nam, culpa aperiam sint officiis veniam. Commodi, labore, eligendi laboriosam, vitae et dignissimos officiis itaque enim error odio sit?
      </p>

    </div>
  );
};
export default OurVisionAndMission;