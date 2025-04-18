
// "use client";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const Team = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: "John Doe",
//       role: "CEO & Founder",
//       image: "https://cdn3.iconfinder.com/data/icons/dashboard-ui-vol-3-flat/48/Dashboard_-_Vol._3-02-512.png",
//       description: "Visionary leader with 15+ years of industry experience."
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       role: "CTO",
//       image: "https://randomuser.me/api/portraits/women/1.jpg",
//       description: "Tech enthusiast driving innovation and product development."
//     },
//     {
//       id: 3,
//       name: "Robert Johnson",
//       role: "Lead Designer",
//       image: "https://randomuser.me/api/portraits/men/2.jpg",
//       description: "Creative mind behind our award-winning designs."
//     },
//     {
//       id: 4,
//       name: "Emily Davis",
//       role: "Marketing Director",
//       image: "https://randomuser.me/api/portraits/women/2.jpg",
//       description: "Strategist who connects our brand with the right audience."
//     },
//     {
//       id: 5,
//       name: "Michael Brown",
//       role: "Senior Developer",
//       image: "https://randomuser.me/api/portraits/men/3.jpg",
//       description: "Code wizard building robust and scalable solutions."
//     },
//     {
//       id: 6,
//       name: "Sarah Wilson",
//       role: "UX Researcher",
//       image: "https://randomuser.me/api/portraits/women/3.jpg",
//       description: "User advocate ensuring seamless product experiences."
//     },
//   ];

//   return (
//     <div className="py-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Our Team
//           </h2>
//           <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
//             Meet the talented people behind our success
//           </p>
//         </div>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//             },
//             768: {
//               slidesPerView: 3,
//             },
//             1024: {
//               slidesPerView: 4,
//             },
//           }}
//           className="py-8"
//         >
//           {teamMembers.map((member) => (
//             <SwiperSlide key={member.id}>
//               <div className="flex flex-col items-center text-center p-4">
//                 <div className="relative w-40 h-40 mb-6 group">
//                   {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-70 group-hover:opacity-100 transition-all duration-300 blur-md"></div> */}
//                   <div className="absolute inset-0 rounded-full  opacity-70 group-hover:opacity-100 transition-all duration-300 blur-md"></div>
//                   <img
//                     className="relative w-full h-full object-cover rounded-full border-4 border-white z-10"
//                     src={member.image}
//                     alt={member.name}
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
//                 <p className="text-purple-600 font-medium mb-2">{member.role}</p>
//                 <p className="text-gray-600 text-sm max-w-xs">{member.description}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Team;

"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://cdn3.iconfinder.com/data/icons/dashboard-ui-vol-3-flat/48/Dashboard_-_Vol._3-02-512.png",
      description: "Visionary leader with 15+ years of industry experience.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        instagram: "#"
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "CTO",
      image: "https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-avatar-the-icon-of-a-female-employee-wearing-suit-png-image_6133908.png",
      description: "Tech enthusiast driving innovation and product development.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        instagram: "#"
      }
    },
    {
      id: 3,
      name: "Robert Johnson",
      role: "Lead Designer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo18ahVGanFscKTUlt8EYLLheTtfGy2M_uKPPidQ56EnEOpFb5GY8Hkdb4tRbZr3NzB1I&usqp=CAU",
      description: "Creative mind behind our award-winning designs.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        instagram: "#"
      }
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Marketing Director",
      image: "https://img.freepik.com/premium-photo/financial-advisor-digital-avatar-generative-ai_934475-9119.jpg?semt=ais_hybrid&w=740",
      description: "Strategist who connects our brand with the right audience.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        instagram: "#"
      }
    },
    {
      id: 5,
      name: "Michael Brown",
      role: "Senior Developer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEg49uELANyubHozBfBZeLH7BHphDHq7SW_eykrdc3rgH5EhqUKT5H21zA5TXXm_-CVb4&usqp=CAU",
      description: "Code wizard building robust and scalable solutions.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        instagram: "#"
      }
    },
    {
      id: 6,
      name: "Sarah Wilson",
      role: "UX Researcher",
      image: "https://cdn4.iconfinder.com/data/icons/professions-1-2/151/10-512.png",
      description: "User advocate ensuring seamless product experiences.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        instagram: "#"
      }
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Meet the talented people behind our success
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="py-8"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="flex flex-col items-center text-center p-4 group hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="relative w-40 h-40 mb-6 group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-70 transition-all duration-300 blur-md"></div>
                  <img
                    className="relative w-full h-full object-cover rounded-full border-4 border-white z-10 group-hover:shadow-xl group-hover:shadow-purple-200/50 transition-all duration-300"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                    <a href={member.social.twitter} className="bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                      <FaTwitter className="text-blue-400" />
                    </a>
                    <a href={member.social.linkedin} className="bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                      <FaLinkedin className="text-blue-600" />
                    </a>
                    <a href={member.social.github} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                      <FaGithub className="text-gray-800" />
                    </a>
                    <a href={member.social.instagram} className="bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition-colors">
                      <FaInstagram className="text-pink-500" />
                    </a>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xs group-hover:shadow-xl group-hover:shadow-purple-200/30 transition-shadow duration-300">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;