import React from "react";

const Services = () => {
  return (
    <div className="py-8">
      {/* Beautiful Heading Section */}
      <div className="text-center mb-8">
        <div className="inline-block mb-3">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
            What I Do
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#012641] via-blue-600 to-[#012641] bg-clip-text text-transparent">
            My Services
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I specialize in creating exceptional digital experiences through innovative web development, 
          responsive design, and cutting-edge technologies that drive business growth and user engagement.
        </p>
      </div>

      <div className="grid grid-cols-3 max-[1100px]:grid-cols-2 max-[500px]:grid-cols-1 gap-8">

        <div className="bg-white service-card-shadow px-4 pt-2 pb-4 group border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[orange] transition-all duration-700 hover:animate-bottom-border">
          <div className="flex justify-center items-center relative">
            <svg width="100" height="100" viewBox="0 0 600 600" className="fill-[#f5f5f5]  group-hover:fill-[orange] transition-all duration-700" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" strokeWidth="0" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="absolute left-[50%] -translate-x-1/2 stroke-[orange] group-hover:stroke-white transition-all duration-700" viewBox="0 0 24 24">
              <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h4l3 8l4-16l3 8h4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold pb-2">Custom UI Development</h2>
          <p>I specialize in creating bespoke user interfaces that are not only visually appealing but also highly functional. Leveraging tools like Tailwind CSS, Material-UI, and Ant Design, I ensure designs are consistent and engaging.</p>
        </div>

        <div className="bg-white service-card-shadow px-4 pt-2 pb-4 group border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#0dcaf0] transition-all duration-700">
          <div className="flex justify-center items-center relative">
            <svg width="100" height="100" className="transform rotate-180 fill-[#f5f5f5] group-hover:fill-[#0dcaf0] transition-all duration-700" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" strokeWidth="0" fill="" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="absolute left-[50%] -translate-x-1/2 transition-all duration-700 fill-[#0dcaf0] group-hover:fill-white" viewBox="0 0 24 24">
              <path d="M5.935 19.687a.74.74 0 0 1-.49-.19a9 9 0 0 1-1-1a9.87 9.87 0 0 1 0-13a9 9 0 0 1 1-1a.75.75 0 0 1 1.06.07a.76.76 0 0 1-.07 1.06a9 9 0 0 0-.86.85a8.41 8.41 0 0 0 0 11q.404.446.86.84a.75.75 0 0 1-.5 1.32z" />
              <path d="M8.405 17.127a.76.76 0 0 1-.47-.16a5 5 0 0 1-.93-.93a6.37 6.37 0 0 1 0-8.09a5 5 0 0 1 .94-.92a.74.74 0 0 1 1.05.13a.75.75 0 0 1-.13 1a4 4 0 0 0-.69.68a4.88 4.88 0 0 0 0 6.21q.309.386.7.69a.76.76 0 0 1 .13 1.06a.77.77 0 0 1-.6.33" />
              <path d="M14.955 11.997a2.9 2.9 0 0 1-.47 1.53a3 3 0 0 1-1 .95a2.9 2.9 0 0 1-1.54.44a3 3 0 0 1-1.54-.43a3.1 3.1 0 0 1-1-1a2.93 2.93 0 0 1 0-3.07a3 3 0 0 1 4.06-1a3.1 3.1 0 0 1 1 1a2.84 2.84 0 0 1 .49 1.58" />
              <path d="M15.605 17.127a.77.77 0 0 1-.59-.28a.75.75 0 0 1 .13-1.06a4 4 0 0 0 .68-.68a4.85 4.85 0 0 0 0-6.21a4.5 4.5 0 0 0-.69-.69a.75.75 0 1 1 .92-1.18q.53.404.94.93a6.35 6.35 0 0 1 0 8.09a5 5 0 0 1-.93.92a.74.74 0 0 1-.46.16" />
              <path d="M18.065 19.687a.75.75 0 0 1-.49-1.32q.455-.395.85-.85a8.38 8.38 0 0 0 0-11a10 10 0 0 0-.85-.84a.76.76 0 0 1-.08-1.06a.75.75 0 0 1 1.06-.07a9.4 9.4 0 0 1 1 1a9.87 9.87 0 0 1 0 13a9.4 9.4 0 0 1-1 1a.7.7 0 0 1-.49.14" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold pb-2">Interactive Web Applications</h2>
          <p>Using React and JavaScript, I develop dynamic and interactive web applications that adapt seamlessly to user needs. My expertise in Framer Motion ensures smooth animations and transitions that captivate audiences.</p>
        </div>

        <div className="bg-white service-card-shadow px-4 pt-2 pb-4 group border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#20c997] transition-all duration-700">
          <div className="flex justify-center items-center relative">
            <svg width="100" height="100" viewBox="0 0 600 600" className="fill-[#f5f5f5] group-hover:fill-[#20c997] transition-all duration-700" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" strokeWidth="0" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="absolute left-[50%] -translate-x-1/2 transition-all duration-700 stroke-[#20c997] group-hover:stroke-white" viewBox="0 0 512 512">
              <rect width="416" height="272" x="48" y="80" fill="none" strokeLinejoin="round" strokeWidth="32" rx="32" ry="32" />
              <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 416v-64m0-272V48m144 416l-32-112M112 464l32-112" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold pb-2">Responsive Web Design</h2>
          <p>I ensure every website is optimized for all devices, from desktops to smartphones. My approach guarantees a seamless and responsive experience, focusing on usability and aesthetics.</p>
        </div>

        <div className="bg-white service-card-shadow px-4 pt-2 pb-4 group border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#df1529] transition-all duration-700">
          <div className="flex justify-center items-center relative">
            <svg width="100" height="100" className="transform rotate-90  fill-[#f5f5f5] group-hover:fill-[#df1529] transition-all duration-700" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" strokeWidth="0" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="fill-[#df1529] group-hover:fill-white absolute left-[50%] -translate-x-1/2 transition-all duration-700" viewBox="0 0 16 16">
              <path d="M2 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2M0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2m2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2 2 0 0 1 1.437-1.437V3.937A2 2 0 0 1 12.063 2.5H3.937A2 2 0 0 1 2.5 3.937M14 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2M2 13a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold pb-2">Component Libraries & Design Systems</h2>
          <p>With a strong understanding of design systems and component libraries like shadcn, I streamline development processes and ensure projects maintain a consistent visual identity.</p>
        </div>

        <div className="bg-white service-card-shadow px-4 pt-2 pb-4 group border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#6610f2] transition-all duration-700">
          <div className="flex justify-center items-center relative">
            <svg width="100" height="100" viewBox="0 0 600 600" className="fill-[#f5f5f5] group-hover:fill-[#6610f2] transition-all duration-700" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" strokeWidth="0" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="stroke-[#6610f2] group-hover:stroke-white absolute left-[50%] -translate-x-1/2 transition-all duration-700" viewBox="0 0 21 21">
              <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2m-2 4h16" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold pb-2">Web Performance Optimization</h2>
          <p>I optimize websites for speed and performance, ensuring fast load times and smooth interactions. By combining creativity with technical excellence, I help deliver exceptional user experiences.</p>
        </div>

        <div className="bg-white service-card-shadow px-4 pt-2 pb-4 group border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#f3268c] transition-all duration-700">
          <div className="flex justify-center items-center relative">
            <svg width="100" height="100" viewBox="0 0 600 600" className="transform rotate-270 fill-[#f5f5f5] group-hover:fill-[#f3268c] transition-all duration-700" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" strokeWidth="0" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" className="stroke-[#f3268c]  group-hover:stroke-white absolute left-[50%] -translate-x-1/2 transition-all duration-700" viewBox="0 0 24 24">
              <path fill="none" d="M6 8.5h12M6 13h6M23.5 2H23c-3 .5-8 .75-11 .75S4 2.5 1 2H.5v21.5h.25l.154-.154A15.7 15.7 0 0 1 12 18.75c3 0 8 .25 11 .75h.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold pb-2">Prototyping & Animation</h2>
          <p> I bring ideas to life with engaging prototypes and animations. By using tools like Framer Motion, I enhance storytelling through motion design that aligns with project goals.</p>
        </div>

      </div>
    </div>
  );
};
export default Services;