'use client'
import { useEffect, useState } from 'react';
import AboutTimeline from './AboutTimeline';

export default function AboutUsPage() {
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    // Animate counters
    const animateCounters = () => {
      const duration = 2000;
      const startTime = Date.now();

      const updateCounters = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setExperience(Math.floor(progress * 12));
        setClients(Math.floor(progress * 150));
        setProjects(Math.floor(progress * 230));

        if (progress < 1) {
          requestAnimationFrame(updateCounters);
        }
      };

      requestAnimationFrame(updateCounters);
    };

    animateCounters();
  }, []);

  return (
    <>
      {/* <Head>
        <title>About Us - Our Story</title>
        <meta name="description" content="Learn about our company and team" />
      </Head> */}

      <main className=" min-h-full bg-gray-50 px-6">
                    <h1  className="text-center text-5xl font-bold text-gray-900">About Us</h1>
        {/* Hero Section */}
        <section className="container  mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content (unchanged) */}
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                We create <span className="text-blue-900">digital experiences</span> that matter
              </h1>
              
              <p className="text-lg text-gray-600">
              At OVS Innovation, we empower brand growth by delivering tailored, innovative technology solutions that drive success and create lasting impact for your business.
              </p>
              
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900">
                    <span className="counter">{experience}</span>+
                  </div>
                  <div className="text-gray-500 mt-1">Years of Experience</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900">
                    <span className="counter">{clients}</span>+
                  </div>
                  <div className="text-gray-500 mt-1">Happy Clients</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900">
                    <span className="counter">{projects}</span>+
                  </div>
                  <div className="text-gray-500 mt-1">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Right Content - Updated with Enso-inspired design */}
            <div className="lg:w-1/2 relative flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Enso-inspired imperfect circle */}
                <svg 
                  className="absolute inset-0 w-full h-full transform rotate-12 animate-float"
                  viewBox="0 0 100 100"
                >
                  <path 
                    d="M50 15
                         a 35 35 0 1 1 0 70
                         a 35 35 0 1 1 0 -70"
                    fill="none"
                    stroke="#818cf8"  // indigo-400
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="220"
                    strokeDashoffset="20"
                  />
                </svg>
                
                {/* Image Container */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white transform -rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-105 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Our Team" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-indigo-200 opacity-70 animate-move-horizontal"></div>
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-indigo-300 opacity-70 animate-move-vertical"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Content Sections (unchanged) */}
        {/* <section className="container mx-auto px-4 py-16 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2010, we started as a small team with big dreams. Over the years, we've grown into a full-service digital agency, but we've never lost our passion for creating meaningful work that makes a difference.
            </p>
            <p className="text-lg text-gray-600">
              Our approach combines strategic thinking with creative execution, ensuring that every project we undertake delivers real value to our clients and their customers.
            </p>
          </div>
        </section> */}
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: rotate(12deg) translateY(0);
          }
          50% {
            transform: rotate(12deg) translateY(-10px);
          }
        }
        
        @keyframes move-horizontal {
          0%, 100% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
        }
        
        @keyframes move-vertical {
          0%, 100% {
            transform: translateY(-5px);
          }
          50% {
            transform: translateY(5px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-move-horizontal {
          animation: move-horizontal 3s ease-in-out infinite;
        }
        
        .animate-move-vertical {
          animation: move-vertical 4s ease-in-out infinite;
        }
        
        .counter {
          display: inline-block;
          min-width: 2ch;
        }
      `}</style>

      <AboutTimeline/>
    </>
  );
}






// part 2
// import { useState } from 'react';
// import Head from 'next/head';

// export default function AboutUs() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const sections = [
//     {
//       title: "Our History",
//       content: "Founded in 2010, we started as a small team with big dreams. Over the years, we've grown into a full-service digital agency serving clients worldwide.",
//       year: "2010",
//       cardPosition: "top",
//       logoPosition: "bottom"
//     },
//     {
//       title: "Our Mission",
//       content: "To create innovative digital solutions that empower businesses and deliver exceptional user experiences through cutting-edge technology and design.",
//       year: "Mission",
//       cardPosition: "bottom",
//       logoPosition: "top"
//     },
//     {
//       title: "Our Vision",
//       content: "To be a global leader in digital transformation, recognized for our creativity, technical excellence, and commitment to sustainable business practices.",
//       year: "Vision",
//       cardPosition: "top",
//       logoPosition: "bottom"
//     },
//     {
//       title: "Our Values",
//       content: "Integrity, innovation, and impact guide every decision we make and every solution we create for our partners and clients.",
//       year: "Values",
//       cardPosition: "bottom",
//       logoPosition: "top"
//     }
//   ];

//   return (
//     <>

//       <main className="min-h-screen bg-gray-50 py-16 px-4 ">
//         <div className="container mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             Our <span className="text-indigo-600">Journey</span>
//           </h1>

//           {/* Horizontal Timeline Container */}
//           <div className="relative h-[500px] md:h-[400px] w-full">

//             {/* Horizontal Zig-Zag Line */}
//             <svg
//   className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 z-0"
//   viewBox="0 0 1000 100"
//   preserveAspectRatio="none"
// >
//   <path
//     d="M0,50 
//        C100,0 150,100 250,50
//        C350,0 400,100 500,50
//        C600,0 650,100 750,50
//        C850,0 900,100 1000,50"
//     fill="none"
//     stroke="#818cf8"
//     strokeWidth="2"
//     strokeDasharray="8,4"
//   />
// </svg>


//             {/* Timeline Items */}
//             <div className="relative z-10 flex flex-col md:flex-row justify-between h-full">
//               {sections.map((section, index) => (
//                 <div 
//                   key={index}
//                   className="relative flex flex-col items-center"
//                   style={{ width: `${100 / sections.length}%` }}
//                   onMouseEnter={() => setActiveIndex(index)}
//                 >
//                   {/* Content Box - Positioned based on cardPosition */}
//                   <div className={`absolute ${section.cardPosition === 'top' ? 'top-[10%] md:top-[5%]' : 'bottom-[10%] md:bottom-[5%]'} w-full md:w-64 p-4 bg-white rounded-lg shadow-md transition-all duration-300 ${activeIndex === index ? 'scale-110 opacity-100' : 'scale-95 opacity-90'}`}>
//                     <h3 className="text-lg font-bold text-indigo-600 mb-1">{section.title}</h3>
//                     <p className="text-sm text-gray-600">{section.content}</p>
//                   </div>

//                   {/* Circle with Year - Positioned based on logoPosition */}
//                   <div className={`absolute ${section.logoPosition === 'top' ? 'top-[35%]' : 'bottom-[35%]'} left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-indigo-600 scale-125 shadow-lg' : 'bg-indigo-300 scale-100'}`}>
//                     <span className={`font-bold text-white ${activeIndex === index ? 'text-sm' : 'text-xs'}`}>
//                       {section.year}
//                     </span>
//                     {activeIndex === index && (
//                       <div className="absolute inset-0 rounded-full border-4 border-indigo-300 animate-ping opacity-75"></div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       <style jsx global>{`
//         @keyframes pulse {
//           0%, 100% {
//             transform: scale(1);
//             opacity: 0.75;
//           }
//           50% {
//             transform: scale(1.3);
//             opacity: 0;
//           }
//         }
//         .animate-ping {
//           animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
//       `}</style>
//     </>
//   );
// }








