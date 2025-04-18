"use client"
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioPage = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration and inventory management.",
      tags: ["React", "Node.js", "MongoDB"],
      videoUrl: "https://example.com/video1.mp4",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXFxWOMH-pc0IGh0x5C43Ui5cH4EubIjldQ&s",
      accentColor: "#0a1172" // blue
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure banking application with biometric authentication and transaction features.",
      tags: ["React Native", "Firebase", "Redux"],
      videoUrl: "https://example.com/video2.mp4",
      thumbnail: "https://www.mindgate.solutions/wp-content/uploads/2024/04/how-to-digitally-transform-your-transaction-banking-business-thumb.jpg",
      accentColor: "#0a1172" // emerald
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      description: "Analytics dashboard for healthcare providers with real-time data visualization.",
      tags: ["Next.js", "Tailwind CSS", "Chart.js"],
      videoUrl: "https://example.com/video3.mp4",
      thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1e02d099112359.5eeb5ccf7b850.jpg",
      accentColor: "#0a1172" // violet
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);
  const activeItem = portfolioItems[activeIndex];

  // Auto-slide with pause on hover
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    };

    if (!isHovering) {
      startInterval();
    }

    return () => clearInterval(intervalRef.current);
  }, [portfolioItems.length, isHovering]);

  const goToSlide = (index) => {
    clearInterval(intervalRef.current);
    setActiveIndex(index);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideIn = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scaleUp = {
    hover: { scale: 1.03, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* <Head>
        <title>Our Portfolio | Showcase of Work</title>
        <meta name="description" content="Explore our portfolio of successful projects and case studies" />
      </Head> */}

      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Section Header with animation */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12 md:mb-20"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={fadeIn}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Portfolio</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Explore our successful projects and see how we've helped businesses like yours.
          </motion.p>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col h-full lg:flex-row gap-8 xl:gap-0">
          {/* Left Column - Content */}
          <div className="lg:w-1/2">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-500"
              style={{ 
                borderTop: `4px solid ${activeItem.accentColor}`,
                transform: 'translateZ(0)' // For smoother animations
              }}
            >
              <motion.div 
                key={`title-${activeIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {activeItem.title}
                </h2>
              </motion.div>
              
              <motion.p 
                key={`desc-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-lg text-gray-600 mb-8"
              >
                {activeItem.description}
              </motion.p>
              
              <motion.div 
                key={`tags-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-8"
              >
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeItem.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.3,
                        delay: 0.3 + (index * 0.1)
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                      style={{ 
                        backgroundColor: `${activeItem.accentColor}20`,
                        color: activeItem.accentColor
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <motion.button 
                  whileHover={{ 
                    y: -2,
                    boxShadow: `0 5px 15px ${activeItem.accentColor}40`
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                  style={{ backgroundColor: activeItem.accentColor }}
                >
                  View Case Study
                </motion.button>
                <motion.button 
                  whileHover={{ 
                    y: -2,
                    backgroundColor: `${activeItem.accentColor}10`
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto border font-medium py-3 px-6 rounded-lg transition-all duration-300"
                  style={{ 
                    borderColor: activeItem.accentColor,
                    color: activeItem.accentColor
                  }}
                >
                  Contact About Similar Project
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Video Slider */}
          <div className="lg:w-1/2">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ delay: 0.3 }}
              className="relative h-full overflow-hidden  bg-black"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Video Player */}
              <div className="aspect-w-16 aspect-h-9 w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.video 
                    key={activeItem.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-96 object-cover"
                    poster={activeItem.thumbnail}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={activeItem.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </motion.video>
                </AnimatePresence>
              </div>
              
              {/* Slide Indicators */}
              <motion.div 
                className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovering ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
              >
                {portfolioItems.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </motion.div>
              
              {/* Navigation Arrows */}
              <motion.button 
                onClick={() => goToSlide(activeIndex === 0 ? portfolioItems.length - 1 : activeIndex - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
                aria-label="Previous slide"
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: isHovering ? 1 : 0.5,
                  x: 0
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: `${activeItem.accentColor}`
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              <motion.button 
                onClick={() => goToSlide(activeIndex === portfolioItems.length - 1 ? 0 : activeIndex + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
                aria-label="Next slide"
                initial={{ opacity: 0, x: 10 }}
                animate={{ 
                  opacity: isHovering ? 1 : 0.5,
                  x: 0
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: `${activeItem.accentColor}`
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
              
              {/* Project name overlay */}
              <motion.div 
                className="absolute top-4 left-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovering ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs font-semibold text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                  {activeItem.title}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Project thumbnails carousel */}
        <motion.div 
          className="mt-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl text-center font-bold text-gray-900 mb-8">More Projects</h2>
          <div className="flex justify-center space-x-4 overflow-x-auto pb-4 -mx-4 px-4">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={scaleUp}
                whileHover="hover"
                className="flex-shrink-0 w-64 cursor-pointer"
                onClick={() => goToSlide(index)}
              >
                <div className="relative rounded-lg overflow-hidden h-40 group">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <div className="flex mt-2 space-x-1">
                        {item.tags.slice(0, 2).map((tag, i) => (
                          <span 
                            key={i}
                            className="text-xs text-white bg-black/30 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 2 && (
                          <span className="text-xs text-white bg-black/30 px-2 py-1 rounded">
                            +{item.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {index === activeIndex && (
                    <div className="absolute inset-0 border-2 border-white rounded-lg pointer-events-none" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PortfolioPage;