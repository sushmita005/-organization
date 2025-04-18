"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  "https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeRoc_BhrP-jahuwf0Hrxe48LiP6DiHWiiw&s",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  // add more logo URLs as needed
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Logo = () => {
  return (
    <div className="w-full py-12 bg-gray-100">
      <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800">
        Trusted by Industry Leaders
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center px-4">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-24 h-24 object-contain  transition duration-300" // Set consistent size
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Logo;
