////////////////////////////// 1st and perfect////////////
// "use client"; // Required for Next.js app directory
// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";

// // avatars
// const avatars = [
//   "https://cpng.pikpng.com/pngl/s/546-5467841_website-development-port-blair-web-design-logo-png.png",
//   "https://www.pngkit.com/png/detail/154-1545805_portfolio-icons-code-web-development-logo.png",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0BlshwcJqUHkq5IusPNF10WCnopGeoh8__sVn_DsOv0uPbEcfRE1x6IYANIb3bMXsTM&usqp=CAU",
//   "https://w7.pngwing.com/pngs/80/274/png-transparent-computer-icons-envato-logo-marketplace-miscellaneous-text-trademark.png",
//   "https://p7.hiclipart.com/preview/609/846/439/discord-computer-icons-logo-computer-software-avatar.jpg",
//   "https://logowik.com/content/uploads/images/985_google_g_icon.jpg", // New avatar
//   "https://img.freepik.com/free-vector/twitter-app-icon-vector-with-watercolor-graphic-effect-21-july-2021-bangkok-thailand_53876-136770.jpg?semt=ais_hybrid&w=740", // New avatar
//   "https://www.onlygfx.com/wp-content/uploads/2022/03/instagram-logo-splatter-4.png", // New avatar
//   "https://iili.io/JYCVqgt.png", // New avatar
// ];

// const positions = [
//   "top-10 left-10",
//   "top-20 right-12",
//   "bottom-12 left-20",
//   "bottom-10 right-16",
//   "top-1/6 left-1/2",
//   "top-5 right-5", // New position
//   "bottom-5 left-5", // New position
//   "top-1/4 left-1/4", // New position
//   "bottom-1/4 right-1/4", // New position
// ];

// const sizes = [
//   "w-12 h-12", // Small
//   "w-16 h-16", // Medium
//   "w-20 h-20", // Large
//   "w-14 h-14", // Medium-small
//   "w-18 h-18", // Medium-large
//   "w-10 h-10", // Smallest
//   "w-22 h-22", // Largest
//   "w-15 h-15", // Medium-small
//   "w-17 h-17", // Medium
// ];
// // avatars

// const slides = [
//   {
//     title: "Your Competitors Are Online.. Why Aren't You?",
//     subtitle: "Dominate your Market before they do!",
//     description: "Get your business online and start selling today.",
//     button: "Contact Us",
//   },
//   {
//     title: "Build Your Online Presence Today!",
//     subtitle: "Get Ahead with a Stunning Website",
//     description: "We help businesses grow with modern, responsive designs.",
//     button: "Start Now",
//   },
//   {
//     title: "Don't Miss Out on Online Customers",
//     subtitle: "Let Us Take You Digital",
//     description: "Boost your reach, increase sales, and dominate your niche.",
//     button: "Let's Talk",
//   },
// ];

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const { title, subtitle, description, button } = slides[currentSlide];

//   return (
//     <div className="relative w-screen h-screen font-raleway bg-gray-100">
//       {/* Avatar Section */}
//       <div className="absolute inset-0 z-10">
//         <div className="relative w-full h-full">
//           {avatars.map((src, i) => (
//             <img
//               key={i}
//               src={src}
//               alt={`Avatar ${i + 1}`}
//               className={`absolute ${sizes[i]} rounded-full object-cover  shadow-md transform hover:scale-110 transition ${positions[i]}`} // Apply different sizes
//             />
//           ))}
//         </div>
//       </div>

//       {/* Slider Section */}
//       <div className="absolute inset-0 z-20 flex items-center justify-center bg-cover bg-center bg-no-repeat">
//         <div className="pt-0 px-10 max-w-4xl mx-auto text-left transition-all duration-700 ease-in-out">
//           <h4 className="text-black font-bold text-lg mb-2">{title}</h4>
//           <h1 className="text-black text-5xl font-semibold mb-4">{subtitle}</h1>
//           <p className="text-black text-base mb-6">{description}</p>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition">
//             {button}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



////////////////////////////////////  2nd 
"use client";
import React, { useState, useEffect } from "react";

// avatars
const avatars = [
  "https://cpng.pikpng.com/pngl/s/546-5467841_website-development-port-blair-web-design-logo-png.png",
  "https://www.pngkit.com/png/detail/154-1545805_portfolio-icons-code-web-development-logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0BlshwcJqUHkq5IusPNF10WCnopGeoh8__sVn_DsOv0uPbEcfRE1x6IYANIb3bMXsTM&usqp=CAU",
  "https://w7.pngwing.com/pngs/80/274/png-transparent-computer-icons-envato-logo-marketplace-miscellaneous-text-trademark.png",
  "https://p7.hiclipart.com/preview/609/846/439/discord-computer-icons-logo-computer-software-avatar.jpg",
  "https://logowik.com/content/uploads/images/985_google_g_icon.jpg",
];

const positions = [
  "top-10 left-10",
  "top-20 right-12",
  "bottom-12 left-20",
  "bottom-10 right-16",
  "top-1/9 left-1/2",
  "top-5 right-5",
];

const sizes = [
  "w-12 h-12",
  "w-16 h-16",
  "w-20 h-20",
  "w-14 h-14",
  "w-18 h-18",
  "w-10 h-10",
];

const animations = [
  "animate-float",
  "animate-spin-slow",
  "animate-bounce",
  "animate-pulse",
  "animate-ping",
  "animate-float-delay",
];

const slides = [
  {
    title: "Your Competitors Are Online.. Why Aren't You?",
    subtitle: "Dominate your Market before they do!",
    description: "Get your business online and start selling today.",
    button: "Contact Us",
  },
  {
    title: "Build Your Online Presence Today!",
    subtitle: "Get Ahead with a Stunning Website",
    description: "We help businesses grow with modern, responsive designs.",
    button: "Start Now",
  },
  {
    title: "Don't Miss Out on Online Customers",
    subtitle: "Let Us Take You Digital",
    description: "Boost your reach, increase sales, and dominate your niche.",
    button: "Let's Talk",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredAvatar, setHoveredAvatar] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, description, button } = slides[currentSlide];

  return (
    <div className="relative w-screen h-screen font-raleway bg-gray-100 overflow-hidden">
      {/* <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes wiggle {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 5s ease-in-out infinite 1s; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-wiggle { animation: wiggle 3s ease-in-out infinite; }
      `}</style> */}

      {/* Avatar Section */}
      <div className="absolute inset-0 z-10">
        <div className="relative w-full h-full">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Avatar ${i + 1}`}
              className={`absolute ${sizes[i]} rounded-full object-cover shadow-md transition-all duration-300 ${
                positions[i]
              } ${animations[i]} ${
                hoveredAvatar === i ? "scale-125" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredAvatar(i)}
              onMouseLeave={() => setHoveredAvatar(null)}
            />
          ))}
        </div>
      </div>

      {/* Device Mockups Section */}
      <div className="absolute inset-0 z-20 flex items-center justify-center gap-8">
        {/* Laptop Mockup */}
        <div className="relative w-[600px] h-[400px]">
          <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900 rounded-t-lg flex items-center justify-start pl-3">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="absolute top-8 left-0 right-0 bottom-0 bg-gray-50 rounded-b-lg overflow-hidden flex items-center justify-center p-4">
              {/* Slider Content inside Laptop */}
              <div className="w-full h-full flex flex-col justify-center">
                <h4 className="text-black font-bold text-lg mb-2">{title}</h4>
                <h1 className="text-black text-3xl font-semibold mb-4">{subtitle}</h1>
                <p className="text-black text-sm mb-6">{description}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition w-fit">
                  {button}
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-gray-700 rounded-b-lg"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-600 rounded-b-lg"></div>
        </div>

        {/* Phone Mockup */}
        <div className="relative w-[200px] h-[400px] right-26 -bottom-24">
          <div className="absolute inset-0 bg-gray-800 rounded-[40px] shadow-xl border-8 border-gray-900">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-700 rounded-full"></div>
            <div className="absolute top-8 left-0 right-0 bottom-0 bg-white rounded-b-[32px] overflow-hidden flex items-center justify-center p-4">
              {/* Slider Content inside Phone */}
              <div className="w-full h-full flex flex-col justify-center">
                <h4 className="text-black font-bold text-sm mb-1">{title}</h4>
                <h1 className="text-black text-lg font-semibold mb-2">{subtitle}</h1>
                <p className="text-black text-xs mb-4">{description}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded transition text-sm w-fit mx-auto">
                  {button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;