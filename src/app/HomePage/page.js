import React from 'react'
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import ServicesPage from "@/components/Services";
import Teams from "@/components/Teams";
import AboutUsPage from '@/components/AboutUs';
// import AboutUs from '@/components/AboutUs';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Logo/>
      {/* <Experience /> */}
      <AboutUsPage/>
      <ServicesPage />
      <Portfolio />
      <Teams/>
    </div>
  )
}

export default Homepage