// best/
// 'use client'
// import { useEffect, useRef } from 'react';

// import { FaApple, FaAndroid, FaWindows, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
// import { SiTypescript, SiTailwindcss, SiFirebase, SiGooglecloud } from 'react-icons/si';

// const HeroSection = () => {
//   const bubblesRef = useRef(null);

//   // Logo data with different sizes and animation delays
//   const logos = [
//     { icon: <FaApple size={24} />, size: 'w-16 h-16', delay: 'delay-0' },
//     { icon: <FaAndroid size={24} />, size: 'w-20 h-20', delay: 'delay-100' },
//     { icon: <FaWindows size={20} />, size: 'w-14 h-14', delay: 'delay-200' },
//     { icon: <FaReact size={28} />, size: 'w-24 h-24', delay: 'delay-300' },
//     { icon: <FaNodeJs size={26} />, size: 'w-20 h-20', delay: 'delay-400' },
//     { icon: <FaAws size={26} />, size: 'w-22 h-22', delay: 'delay-500' },
//     { icon: <SiTypescript size={22} />, size: 'w-18 h-18', delay: 'delay-600' },
//     { icon: <SiTailwindcss size={22} />, size: 'w-16 h-16', delay: 'delay-700' },
//     { icon: <SiFirebase size={24} />, size: 'w-20 h-20', delay: 'delay-800' },
//     { icon: <SiGooglecloud size={24} />, size: 'w-18 h-18', delay: 'delay-900' },
//   ];

//   // Position bubbles randomly on component mount
//   useEffect(() => {
//     if (bubblesRef.current) {
//       const bubbles = bubblesRef.current.querySelectorAll('.logo-bubble');
//       bubbles.forEach(bubble => {
//         // Random position within container
//         const x = Math.random() * 80;
//         const y = Math.random() * 80;
//         bubble.style.left = `${x}%`;
//         bubble.style.top = `${y}%`;
//       });
//     }
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Text Content */}
//         <div className="text-center mb-16 lg:mb-0 lg:w-1/2 lg:pr-10 lg:text-left">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//             Build <span className="text-blue-600">Digital Experiences</span> That Matter
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
//             We create stunning web and mobile applications with cutting-edge technologies that drive results.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
//               Get Started
//             </button>
//             <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Device Mockups */}
//         <div className="relative mt-16 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-1/2">
//           {/* Laptop Mockup */}
//           <div className="relative mx-auto w-full max-w-xl">
//             <div className="relative z-10 w-full rounded-xl overflow-hidden shadow-2xl">
//               {/* Laptop frame */}
//               <div className="relative pb-[56.25%] bg-gray-800 rounded-t-xl">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   {/* Video iframe or video element */}
//                   <div className="w-full h-full bg-black flex items-center justify-center">
//                     {/* <video 
//                       autoPlay 
//                       loop 
//                       muted 
//                       playsInline
//                       className="w-full h-full object-cover"
//                     >
//                       <iframe src="https://www.youtube.com/watch?v=efuOHBJUV6c" type="video/mp4" />
//                     </video> */}
//                      <iframe
//     className="absolute inset-0 w-full h-full"
//     src={`https://www.youtube.com/embed/efuOHBJUV6c?autoplay=1&mute=1&loop=1&playlist=efuOHBJUV6c&controls=0&modestbranding=1&rel=0`}
//     frameBorder="0"
//     allowFullScreen
//     allow="autoplay"
//   />
//                   </div>
//                 </div>
//               </div>
//               <div className="h-4 bg-gray-200 rounded-b-xl flex justify-center">
//                 <div className="w-1/3 h-full bg-gray-300 rounded-b-md"></div>
//               </div>
//             </div>
//           </div>

//           {/* Phone Mockup */}
//           <div className="absolute -bottom-12 z-20 w-32 sm:w-40 md:w-48">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-800">
//               <div className="relative pb-[177.78%] bg-gray-800">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   {/* Video iframe or video element */}
//                   <div className="w-full h-full bg-black flex items-center justify-center">
//                     {/* <video 
//                       autoPlay 
//                       loop 
//                       muted 
//                       playsInline
//                       className="w-full h-full object-cover"
//                     >
//                       <source src="https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4" type="video/mp4" />
//                     </video> */}
//                      <iframe
//     className="absolute inset-0 w-full h-full"
//     src={`https://www.youtube.com/embed/efuOHBJUV6c?autoplay=1&mute=1&loop=1&playlist=efuOHBJUV6c&controls=0&modestbranding=1&rel=0`}
//     frameBorder="0"
//     allowFullScreen
//     allow="autoplay"
//   />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute top-1/2 -left-2 w-1 h-16 bg-gray-800 rounded-l-md"></div>
//           </div>
//         </div>

//         {/* Animated Logo Bubbles */}
//         <div 
//           ref={bubblesRef}
//           className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none"
//         >
//           {logos.map((logo, index) => (
//             <div 
//               key={index}
//               className={`logo-bubble absolute ${logo.size} rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md animate-float ${logo.delay}`}
//               style={{
//                 animationDuration: `${15 + index * 2}s`,
//                 animationDelay: `${index * 0.5}s`
//               }}
//             >
//               <div className="text-gray-700">
//                 {logo.icon}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Custom animation keyframes */}
//       <style jsx global>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(5deg);
//           }
//           100% {
//             transform: translateY(0) rotate(0deg);
//           }
//         }
//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;



/////////////////////////////// website instead of video //////////////////////////////////////////////

'use client'
import { useEffect, useRef } from 'react';
import { FaApple, FaAndroid, FaWindows, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFirebase, SiGooglecloud } from 'react-icons/si';

const HeroSection = () => {
  const bubblesRef = useRef(null);
  const laptopIframeRef = useRef(null);
  const phoneIframeRef = useRef(null);

  // Logo data with different sizes and animation delays
  const logos = [
    { icon: <FaApple size={24} />, size: 'w-16 h-16', delay: 'delay-0' },
    { icon: <FaAndroid size={24} />, size: 'w-20 h-20', delay: 'delay-100' },
    { icon: <FaWindows size={20} />, size: 'w-14 h-14', delay: 'delay-200' },
    { icon: <FaReact size={28} />, size: 'w-24 h-24', delay: 'delay-300' },
    { icon: <FaNodeJs size={26} />, size: 'w-20 h-20', delay: 'delay-400' },
    { icon: <FaAws size={26} />, size: 'w-22 h-22', delay: 'delay-500' },
    { icon: <SiTypescript size={22} />, size: 'w-18 h-18', delay: 'delay-600' },
    { icon: <SiTailwindcss size={22} />, size: 'w-16 h-16', delay: 'delay-700' },
    { icon: <SiFirebase size={24} />, size: 'w-20 h-20', delay: 'delay-800' },
    { icon: <SiGooglecloud size={24} />, size: 'w-18 h-18', delay: 'delay-900' },
  ];

  // Websites to display in the iframes
  const websites = {
    laptop: 'https://ovsinnovation.in/', // Replace with your desired website
    phone: 'https://ovsinnovation.in/'   // Replace with your desired website
  };

  // Position bubbles randomly on component mount
  useEffect(() => {
    if (bubblesRef.current) {
      const bubbles = bubblesRef.current.querySelectorAll('.logo-bubble');
      bubbles.forEach(bubble => {
        const x = Math.random() * 80;
        const y = Math.random() * 80;
        bubble.style.left = `${x}%`;
        bubble.style.top = `${y}%`;
      });
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="text-center mb-16 lg:mb-0 lg:w-1/2 lg:pr-10 lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Build <span className="text-blue-600">Digital Experiences</span> That Matter
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            We create stunning web and mobile applications with cutting-edge technologies that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>

        {/* Device Mockups */}
        <div className="relative mt-16 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-1/2">
          {/* Laptop Mockup */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative z-10 w-full rounded-xl overflow-hidden shadow-2xl">
              {/* Laptop frame */}
              <div className="relative pb-[56.25%] bg-gray-800 rounded-t-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-white">
                    <iframe
                      ref={laptopIframeRef}
                      src={websites.laptop}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="h-4 bg-gray-200 rounded-b-xl flex justify-center">
                <div className="w-1/3 h-full bg-gray-300 rounded-b-md"></div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="absolute -bottom-12 z-20 w-32 sm:w-40 md:w-48">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-800">
              <div className="relative pb-[177.78%] bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-white">
                    <iframe
                      ref={phoneIframeRef}
                      src={websites.phone}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -left-2 w-1 h-16 bg-gray-800 rounded-l-md"></div>
          </div>
        </div>

        {/* Animated Logo Bubbles */}
        <div 
          ref={bubblesRef}
          className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none"
        >
          {logos.map((logo, index) => (
            <div 
              key={index}
              className={`logo-bubble absolute ${logo.size} rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md animate-float ${logo.delay}`}
              style={{
                animationDuration: `${15 + index * 2}s`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              <div className="text-gray-700">
                {logo.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;








// pages/index.js///////////////////////////last //////////////////////////////////////
// 'use client'
// import { useEffect, useState } from 'react';
// import Head from 'next/head';

// const techLogos = [
//   { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
//   { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
//   { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
//   { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
//   { name: 'Vue', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
//   { name: 'Angular', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
//   { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
//   { name: 'Express', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
//   { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
//   { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
//   { name: 'Sass', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
//   { name: 'Bootstrap', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
//   { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
//   { name: 'Webpack', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
//   { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
// ];

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

// export default function DeviceMockupPage() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [bubbles, setBubbles] = useState([]);

//   useEffect(() => {
//     // Initialize bubbles
//     const initialBubbles = techLogos.map((tech, index) => ({
//       id: index,
//       size: Math.floor(Math.random() * 50) + 50,
//       xPos: Math.floor(Math.random() * 80) + 10,
//       yPos: Math.floor(Math.random() * 80) + 10,
//       duration: Math.floor(Math.random() * 20) + 10,
//       delay: Math.floor(Math.random() * 10),
//       tech
//     }));
//     setBubbles(initialBubbles);

//     // Set up carousel interval
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br bg-gray-100 text-white overflow-x-hidden relative">
//       <Head>
//         <title>Digital Presence Showcase</title>
//         <meta name="description" content="Showcase your digital presence across devices" />
//       </Head>

//       {/* Technology Bubbles */}
//       {bubbles.map((bubble) => (
//         <div
//           key={bubble.id}
//           className="absolute rounded-full flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm shadow-lg hover:scale-110 hover:z-50 transition-transform duration-300"
//           style={{
//             width: `${bubble.size}px`,
//             height: `${bubble.size}px`,
//             left: `${bubble.xPos}%`,
//             top: `${bubble.yPos}%`,
//             animation: `float ${bubble.duration}s infinite ${bubble.delay}s linear`
//           }}
//           title={bubble.tech.name}
//         >
//           <img
//             src={bubble.tech.url}
//             alt={bubble.tech.name}
//             className="w-[60%] h-[60%] object-contain"
//           />
//         </div>
//       ))}

//       <div className="container mx-auto min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
//         <div className="flex flex-wrap justify-center items-center gap-12 my-12 relative">
//           {/* Laptop Mockup */}
//           {/* <div className="w-[600px] h-[400px] relative z-30 "> */}
//           <div className="w-[600px] h-[400px] relative z-30 left-24">
//             <div className="w-[80%] h-[70%] bg-gray-900 border-[12px] border-gray-700 rounded-xl mx-auto relative overflow-hidden shadow-xl">
//               <div className="carousel relative w-full h-full">
//                 {slides.map((slide, index) => (
//                   <div
//                     key={index}
//                     className={`absolute inset-0 flex flex-col items-center justify-center text-white p-8 transition-opacity duration-1000 ${
//                       index === currentSlide ? 'opacity-100' : 'opacity-0'
//                     }`}
//                   >
//                     <h2 className="text-2xl font-bold mb-4 text-center">{slide.title}</h2>
//                     <h3 className="text-xl mb-4 text-center">{slide.subtitle}</h3>
//                     <p className="text-base mb-6 text-center">{slide.description}</p>
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded transition-colors">
//                       {slide.button}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="w-full h-[10px] bg-gray-700 rounded-b-xl mx-auto"></div>
//             <div className="w-[90%] h-[40px] bg-gray-800 rounded-b-sm mx-auto"></div>
//           </div>

//           {/* Phone Mockup */}
//           <div className="w-[200px] h-[400px] relative z-30 right-16 top-5">
//             <div className="w-[40%] h-[20px] bg-gray-700 rounded-b-lg mx-auto"></div>
//             <div className="w-[90%] h-[85%] bg-gray-900 border-[10px] border-gray-700 rounded-[30px] mx-auto relative overflow-hidden shadow-xl">
//               <div className="carousel relative w-full h-full">
//                 {slides.map((slide, index) => (
//                   <div
//                     key={index}
//                     className={`absolute inset-0 flex flex-col items-center justify-center text-white p-4 transition-opacity duration-1000 ${
//                       index === currentSlide ? 'opacity-100' : 'opacity-0'
//                     }`}
//                   >
//                     <h2 className="text-sm font-bold mb-2 text-center">{slide.title}</h2>
//                     <h3 className="text-xs mb-2 text-center">{slide.subtitle}</h3>
//                     <p className="text-xs mb-4 text-center">{slide.description}</p>
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium py-1 px-3 rounded transition-colors">
//                       {slide.button}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0) translateX(0) rotate(0deg);
//           }
//           25% {
//             transform: translateY(-50px) translateX(50px) rotate(10deg);
//           }
//           50% {
//             transform: translateY(0) translateX(100px) rotate(0deg);
//           }
//           75% {
//             transform: translateY(50px) translateX(50px) rotate(-10deg);
//           }
//           100% {
//             transform: translateY(0) translateX(0) rotate(0deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }