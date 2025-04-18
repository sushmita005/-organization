"use client";
import React, { useState } from "react";
const Experience = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const content = {
    mission: {
      left: "Mission Content 1",
      right:
        "To provide innovative, user-friendly, and scalable software solutions that help businesses thrive in the digital era. We are committed to quality, reliability, and customer satisfaction in every project we undertake.",
    },
    work: {
      left: "Work Content 1",
      right:
        "At OVS Innovation, we collaborate closely with clients to craft customized, scalable solutions using agile methodologies, ensuring seamless delivery and ongoing support. Our goal is to empower your brand’s growth through innovative technology and continuous improvement.",
    },
  };

  return (
    <section className="flex justify-center gap-10 w-screen p-5">
      {/* <div className=' flex flex-row border-black-500 border-2 w-1/2'>
        <img className='w-1/2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqnLl0pbp4x5lGWJBYcbXHMJ7b99IsjfyZegrTS10ao712DpGwBi_ZhUoUgEAXgAUPgo&usqp=CAU'/>
        <img className='w-1/2' src='https://ovsinnovation.in/wp-content/uploads/2024/04/banner-2.jpg'/>
        </div> */}
      <div className="relative flex w-1/2  ">
        <img
          className="w-1/2"
          src="https://ovsinnovation.in/wp-content/uploads/2025/03/two-smiling-female-coworkers-looking-through-document-cafe_1262-12592.jpg"
        />
        <img
          className="w-1/2 absolute left-[45%] top-14"
          src="https://ovsinnovation.in/wp-content/uploads/2024/04/banner-2.jpg"
        />
      </div>

      <div className="w-1/2">
        <h5>
          <b>Who We are </b>
        </h5>
        <h1 className="text-5xl font-bold">
          <strong>
            Empowering Brand <br /> Growth Together
          </strong>
        </h1>
        <p className="text-1xl">
          At OVS Innovation, we empower brand growth by delivering tailored,
          innovative technology solutions that drive success and create lasting
          impact for your business.
        </p>
        {/* <div className='flex gap-5 w-full'>
                    <div className='w-1/2'>Our Mission
                    <div className='flex w-full'>
                                        <div className='w-1/2'>1</div>
                                        <div className='w-1/2'>2</div>
                    </div>
                    </div>
                    <div className='w-1/2'>How we work
                    <div className='flex w-full'>
                                        <div className='w-1/2'>1</div>
                                        <div className='w-1/2'>2</div>
                    </div></div>
                    </div> */}

        {/* 2nd  */}
        {/* <div className='flex flex-col gap-5 w-full'>
  
  <div className='flex gap-5 w-full'>
    <div className='w-1/2'>Our Mission</div>
    <div className='w-1/2'>How we work</div>
  </div>

  
  <div className='flex w-full'>
    <div className='w-1/2'>1</div>
    <div className='w-1/2'>2</div>
  </div>
</div> */}

        <div className="flex flex-col gap-5 w-full">
          {/* Toggle Buttons */}
          <div className="flex gap-5 w-full">
            <div
              className={`w-1/3 cursor-pointer p-2 text-center  ${
                activeTab === "mission" ? "bg-blue-200" : "bg-gray-100"
              }`}
              onClick={() => setActiveTab("mission")}
            >
              Our Mission
            </div>
            <div
              className={`w-1/3 cursor-pointer p-2 text-center  ${
                activeTab === "work" ? "bg-blue-200" : "bg-gray-100"
              }`}
              onClick={() => setActiveTab("work")}
            >
              How We Work
            </div>
          </div>

          {/* Shared Content Area */}
          <div className="flex w-full  p-4 gap-5">
            <div className="w-1/3 bg-gray-50 p-2 rounded">
              {" "}
              {content[activeTab].left}{" "}
            </div>
            <div className="w-2/3 bg-gray-50 p-2 rounded">
              {" "}
              {content[activeTab].right}{" "}
            </div>
          </div>
        </div>

        {/*  */}
        {/* <div className='flex gap-5 '>

<button className='border-2 rounded-4xl  px-5 bg-blue-900 text-white'>Consulting Now</button>
<div className="flex items-center gap-4  border border-gray-200 rounded-lg max-w-md mx-auto my-10 font-sans">
        <div className="text-2xl text-blue-500">
            <i className="fas fa-phone-alt"></i> 
        </div>
        <div className="flex flex-col gap-1">
            <div className="font-semibold text-base">Call us anytime</div>
            <div className="text-sm text-gray-500">24/7 customer support</div>
        </div>
    </div>

</div> */}
        <div className="flex gap-5 items-center">
          <button className="px-6 py-3 rounded-full bg-blue-900 text-white text-sm font-medium hover:bg-blue-800 transition">
            Consulting Now
          </button>

          <div className="flex items-center gap-4 border border-gray-200 rounded-lg px-4 py-3 max-w-md font-sans shadow-sm">
            <div className="text-2xl text-blue-500">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-semibold text-base">Call us anytime</div>
              <div className="text-sm text-gray-500">24/7 customer support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
