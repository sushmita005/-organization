
"use client"; // This component uses client-side features
/////////////// Perfect ///////////////////
// import React from "react";

// export default function AtomUI() {
//   const logos = [
//     "https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png",
//     "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
//     "https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?semt=ais_hybrid&w=740",
//     "/logo4.png",
//     "/logo5.png",
//     "/logo6.png",
//     "/logo7.png",
//     "/logo8.png"
//   ];

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white">
//       <div className="relative w-[600px] h-[600px] overflow-hidden">
//         {/* Orbit Generator */}
//         {[
//           { radius: 120, count: 2, animation: 'animate-spin-slow' },
//           { radius: 180, count: 4, animation: 'animate-spin-slow-reverse' },
//           { radius: 240, count: 6, animation: 'animate-spin-slow' },
//           { radius: 300, count: 8, animation: 'animate-spin-slow-reverse' }
//         ].map((orbit, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 rounded-full border-2 border-black ${orbit.animation}`}
//             style={{
//               width: `${orbit.radius * 2}px`,
//               height: `${orbit.radius * 2}px`,
//               left: `calc(50% - ${orbit.radius}px)`,
//               top: `calc(50% - ${orbit.radius}px)`,
//               animationDuration: `${15 + index * 3}s`
//             }}
//           >
//             {[...Array(orbit.count)].map((_, i) => {
//               const angle = (360 / orbit.count) * i;
//               const rad = (angle * Math.PI) / 180;
//               const x = orbit.radius * Math.cos(rad);
//               const y = orbit.radius * Math.sin(rad);
//               const logo = logos[(index + i) % logos.length];
//               const size = 24 + ((index + i) % 3) * 8; // Vary sizes: 24, 32, 40px
//               return (
//                 <img
//                   key={i}
//                   src={logo}
//                   alt="Electron"
//                   className="absolute rounded-full border-2 border-black object-contain"
//                   style={{
//                     width: `${size}px`,
//                     height: `${size}px`,
//                     left: `calc(50% + ${x}px - ${size / 2}px)`,
//                     top: `calc(50% + ${y}px - ${size / 2}px)`
//                   }}
//                 />
//               );
//             })}
//           </div>
//         ))}

//         {/* Nucleus - replaced with an image */}
//         <img
//           src="https://www.freeiconspng.com/thumbs/laptop-png/mac-laptop-png-13.png "
//           alt="Nucleus"
//           className="absolute left-1/2 top-1/2 w-40 h-40 object-fit rounded-full border-2 border-black transform -translate-x-1/2 -translate-y-1/2"
//         />

//         {/* Mask to hide lower 180 degrees */}
//         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white z-10 pointer-events-none"></div>
//       </div>
//     </div>
//   );
// }
/////////////////////////////////////////


// import React ,{ useEffect, useState }from "react";
// export default function AtomUI() {
//   const logos = [
//     "https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?semt=ais_hybrid&w=740",
//     "/logo2.png",
//     "/logo3.png",
//     "/logo4.png",
//     "/logo5.png",
//     "/logo6.png",
//     "/logo7.png",
//     "/logo8.png"
//   ];
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//                     setMounted(true);
//                   }, []);
                
//                   if (!mounted) return null;

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white ">
//       <div className="relative w-screen h-[940px] overflow-hidden">
//         {/* Orbit Generator */}
//         {[
//           { radius: 200, count: 2, animation: 'animate-spin-slow' },
//           { radius: 280, count: 4, animation: 'animate-spin-slow-reverse' },
//           { radius: 360, count: 6, animation: 'animate-spin-slow' },
// //           { radius: 440, count:  8, animation: 'animate-spin-slow-reverse' }
// //           { radius: 440, count: 8, animation: 'animate-spin-slow-reverse' }
//         ].map((orbit, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 rounded-full border-dashed border-2 border-gray-400 ${orbit.animation}`}
//             style={{
//               width: `${orbit.radius * 2}px`,
//               height: `${orbit.radius * 2}px`,
//               left: `calc(50% - ${orbit.radius}px)`,
//               top: `calc(50% - ${orbit.radius}px)`,
//               animationDuration: `${15 + index * 3}s`
//             }}
//           >
//             {[...Array(orbit.count)].map((_, i) => {
//               const angle = (360 / orbit.count) * i;
//               const rad = (angle * Math.PI) / 180;
//               const x = orbit.radius * Math.cos(rad);
//               const y = orbit.radius * Math.sin(rad);
//               const logo = logos[(index + i) % logos.length];
//               const size = 32 + ((index + i) % 3) * 8; // Vary sizes: 24, 32, 40px
//               return (
//                 <img
//                   key={i}
//                   src={logo}
//                   alt="Electron"
//                   className="absolute rounded-full border-2 border-black object-contain"
//                   style={{
//                     width: `${size}px`,
//                     height: `${size}px`,
//                     left: `calc(50% + ${x}px - ${size / 2}px)`,
//                     top: `calc(50% + ${y}px - ${size / 2}px)`
//                   }}
//                 />
//               );
//             })}
//           </div>
//         ))}

//         {/* Nucleus - replaced with an image */}
//         <img
//           src="https://media.istockphoto.com/id/1397083855/vector/realistic-darkgrey-notebook-with-transparent-screen-isolated-new-laptop-open-display-can-use.jpg?s=612x612&w=0&k=20&c=AU4EBT0W9MQCBJC790FTLQiAU56k_hqLjId0kOMENjI="
//           alt="Nucleus"
//           className="absolute left-1/2 top-1/2 w-70 h-70 object-contain rounded-full border-2 border-black transform -translate-x-1/2 -translate-y-1/2"
// //           className="absolute left-1/2 top-1/2 w-70 h-70 object-scale-down rounded-full border-2 border-black transform -translate-x-1/2 -translate-y-1/2"
//         />

//         {/* Mask to hide lower 180 degrees */}
//         <div className="absolute bottom-0 left-0 w-full h-96 bg-white z-10 pointer-events-none"></div>
//       </div>
//     </div>
//   );
// }

// pages/index.js
// 'use client'
import { useEffect, useState } from "react";
import Hero2 from "./Hero2";

export default function Home() {
  const logos = [
    "https://cpng.pikpng.com/pngl/s/546-5467841_website-development-port-blair-web-design-logo-png.png",
    "https://www.pngkit.com/png/detail/154-1545805_portfolio-icons-code-web-development-logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0BlshwcJqUHkq5IusPNF10WCnopGeoh8__sVn_DsOv0uPbEcfRE1x6IYANIb3bMXsTM&usqp=CAU",
    "https://w7.pngwing.com/pngs/80/274/png-transparent-computer-icons-envato-logo-marketplace-miscellaneous-text-trademark.png",
    "https://p7.hiclipart.com/preview/609/846/439/discord-computer-icons-logo-computer-software-avatar.jpg",
    "https://logowik.com/content/uploads/images/985_google_g_icon.jpg", // New avatar
    "https://img.freepik.com/free-vector/twitter-app-icon-vector-with-watercolor-graphic-effect-21-july-2021-bangkok-thailand_53876-136770.jpg?semt=ais_hybrid&w=740", // New avatar
    "https://www.onlygfx.com/wp-content/uploads/2022/03/instagram-logo-splatter-4.png", // New avatar
    "https://iili.io/JYCVqgt.png",
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-screen h-[940px] overflow-hidden">
        {/* Orbits */}
        {[
          { radius: 400, count: 6 },
          { radius: 500, count: 7 },
          { radius: 300, count: 4 },
          { radius: 200, count: 2 }
        ].map((orbit, index) => (
          <div
            key={index}
//             className="absolute inset-0 rounded-full border-dashed border-2 border-gray-400"
            className="absolute inset-0 rounded-full "
            style={{
              width: `${orbit.radius * 2}px`,
              height: `${orbit.radius * 2}px`,
              left: `calc(50% - ${orbit.radius}px)`,
              top: `calc(50% - ${orbit.radius}px)`
            }}
          >
            {[...Array(orbit.count)].map((_, i) => {
              const angle = (360 / orbit.count) * i;
              const rad = (angle * Math.PI) / 180;
              const x = orbit.radius * Math.cos(rad);
              const y = orbit.radius * Math.sin(rad);
              const logo = logos[(index + i) % logos.length];
              const size = 32 + ((index + i) % 3) * 8;

              return (
                <img
                  key={i}
                  src={logo}
                  alt="Electron"
                  className="absolute rounded-full border-2 border-gray-300 object-contain electron"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `calc(50% + ${x}px - ${size / 2}px)`,
                    top: `calc(50% + ${y}px - ${size / 2}px)`,
                    animationDelay: `${(i + index) * 0.3}s`
                  }}
                />
              );
            })}
          </div>
        ))}

        {/* Nucleus */}
        <img
          src="https://img.freepik.com/premium-vector/laptop-vector-mockup-647546_982290-58.jpg?semt=ais_hybrid&w=740"
          alt="Nucleus"
          className="absolute left-1/2 top-1/2 w-1/2 h-1/2  object-cover  transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* Bottom Mask */}
        <div className="absolute bottom-0 left-0 w-full h-70  bg-white z-10 pointer-events-none">
                    <Hero2/>
        </div>
      
      </div>
    </div>
  );
}
