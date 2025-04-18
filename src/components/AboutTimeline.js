// part 2
import { useState } from 'react';
import Head from 'next/head';

export default function AboutTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "Our History",
      content: "Founded in 2010, we started as a small team with big dreams. Over the years, we've grown into a full-service digital agency serving clients worldwide.",
      year: "2010",
      cardPosition: "top",
      logoPosition: "bottom"
    },
    {
      title: "Our Mission",
      content: "To create innovative digital solutions that empower businesses and deliver exceptional user experiences through cutting-edge technology and design.",
      year: "Mission",
      cardPosition: "bottom",
      logoPosition: "top"
    },
    {
      title: "Our Vision",
      content: "To be a global leader in digital transformation, recognized for our creativity, technical excellence, and commitment to sustainable business practices.",
      year: "Vision",
      cardPosition: "top",
      logoPosition: "bottom"
    },
    {
      title: "Our Values",
      content: "Integrity, innovation, and impact guide every decision we make and every solution we create for our partners and clients.",
      year: "Values",
      cardPosition: "bottom",
      logoPosition: "top"
    }
  ];

  return (
    <>

      <main className="  min-h-full bg-gray-50 py-16 px-4 ">
        <div className="container  mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Our <span className="text-blue-900">Journey</span>
          </h1>

          {/* Horizontal Timeline Container */}
          <div className="relative h-[500px] md:h-[400px] w-full">

            {/* Horizontal Zig-Zag Line */}
            <svg
  className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 z-0"
  viewBox="0 0 1000 100"
  preserveAspectRatio="none"
>
  <path
    d="M0,50 
       C100,0 150,100 250,50
       C350,0 400,100 500,50
       C600,0 650,100 750,50
       C850,0 900,100 1000,50"
    fill="none"
    stroke="#818cf8"
    strokeWidth="2"
    strokeDasharray="8,4"
  />
</svg>


            {/* Timeline Items */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between h-full ">
              {sections.map((section, index) => (
                <div 
                  key={index}
                  className="relative flex flex-col items-center"
                  style={{ width: `${100 / sections.length}%` }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/* Content Box - Positioned based on cardPosition */}
                  <div className={`absolute ${section.cardPosition === 'top' ? 'top-[10%] md:top-[5%]' : 'bottom-[10%] md:bottom-[5%]'} w-full md:w-64 p-4 bg-white rounded-lg shadow-md transition-all duration-300 ${activeIndex === index ? 'scale-110 opacity-100' : 'scale-95 opacity-90'}`}>
                    <h3 className="text-lg font-bold text-blue-900 mb-1">{section.title}</h3>
                    <p className="text-sm text-gray-600">{section.content}</p>
                  </div>

                  {/* Circle with Year - Positioned based on logoPosition */}
                  <div className={`absolute ${section.logoPosition === 'top' ? 'top-[35%]' : 'bottom-[35%]'} left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-blue-900 scale-125 shadow-lg' : 'bg-indigo-300 scale-100'}`}>
                    <span className={`font-bold text-white ${activeIndex === index ? 'text-sm' : 'text-xs'}`}>
                      {section.year}
                    </span>
                    {activeIndex === index && (
                      <div className="absolute inset-0 rounded-full border-4 border-indigo-300 animate-ping opacity-75"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.75;
          }
          50% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
}