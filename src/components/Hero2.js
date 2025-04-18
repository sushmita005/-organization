'use client'
import React ,{useEffect,useState} from "react";

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
const Hero2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, description, button } = slides[currentSlide];
  return (
    <div className=" text-center relative w-screen h-full mb-9 font-raleway ">
      {/* Slider Section */}
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="pt-0 px-10 max-w-4xl mx-auto text-left transition-all duration-700 ease-in-out">
          <h4 className="text-black font-bold text-lg mb-2">{title}</h4>
          <h1 className="text-black text-5xl font-semibold mb-4">{subtitle}</h1>
          <p className="text-black text-base mb-6">{description}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
