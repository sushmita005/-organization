// "use client";

// import React, { useState } from "react";

// const Navbar = () => {
//   const [active, setActive] = useState("Home");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const menuItems = [
//     "Home",
//     "AboutUs",
//     "Services",
//     "Portfolio",
//     "Blog",
//     "Contact",
//   ];

//   return (
//     <div className="bg-gray-100 ">
//       <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 border-2 rounded-4xl relative z-10 w-5/6 justify-center mx-auto">
//         <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
//           {/* Logo */}
//           <a href="#" className="flex items-center">
//             <img
//               src="https://ovsinnovation.in/wp-content/uploads/2024/04/logo-ovs1.png"
//               className="h-6 mr-3 sm:h-9"
//               alt="OVS Logo"
//             />
//           </a>

//           {/* Hamburger menu button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             type="button"
//             className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
//             aria-controls="mobile-menu"
//             aria-expanded={isMobileMenuOpen}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-6 h-6"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>

//           {/* Contact Button */}
//           <div className="hidden lg:flex items-center lg:order-2">
//             <a
//               href="#"
//               className="text-white bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:ring-blue-950 font-medium rounded-4xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-blue-950 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-950"
//             >
//               Contact Us
//             </a>
//           </div>

//           {/* Nav Links */}
//           <div
//             className={`${
//               isMobileMenuOpen ? "block" : "hidden"
//             } w-full lg:flex lg:w-auto lg:order-1`}
//             id="mobile-menu"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               {menuItems.map((item) => (
//                 <li key={item}>
//                   <button
//                     onClick={() => {
//                       setActive(item);
//                       setIsMobileMenuOpen(false);
//                     }}
//                     className={`menu-link relative block py-2 pl-3 pr-4 transition-all duration-300 lg:p-0 ${
//                       active === item
//                         ? "text-blue-950 active"
//                         : "text-gray-700 dark:text-gray-400 hover:text-orange-700"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             {/* Contact button inside mobile menu */}
//             <div className="mt-4 block lg:hidden">
//               <a
//                 href="#"
//                 className="block text-white bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:ring-blue-950 font-medium rounded-4xl text-sm px-4 py-2 text-center dark:bg-blue-950 dark:hover:bg-blue-900 dark:focus:ring-blue-950"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Inline CSS for sliding underline */}
//       <style jsx>{`
//         .menu-link::after {
//           content: "";
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           height: 2px;
//           width: 0;
//           background-color: #0a1172;
//           transition: width 0.4s ease;
//         }

//         .menu-link.active::after {
//           width: 100%;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "AboutUs", link: "/aboutus" },
    { label: "Services", link: "/services" },
    { label: "Portfolio", link: "/portfolio" },
    { label: "Blog", link: "/blog" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <div className="bg-gray-100 p-4 text-sm ">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 border-2 rounded-4xl relative z-10 w-5/6 justify-center mx-auto">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://ovsinnovation.in/wp-content/uploads/2024/04/logo-ovs1.png"
              className="h-6 mr-3 sm:h-9"
              alt="OVS Logo"
            />
          </Link>

          {/* Hamburger menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex items-center lg:order-2">
            <Link href="/contact">
              <span className="text-white bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:ring-blue-950 font-medium rounded-4xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-blue-950 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-950">
                Contact Us
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {menuItems.map((item) => (
                <li key={item?.label}>
                  <Link
                    href={`${item?.link.toLowerCase()}`}
                    onClick={() => {
                      setActive(item);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`menu-link relative block py-2 pl-3 pr-4 transition-all duration-300 lg:p-0 ${
                      active === item
                        ? "text-blue-950 active"
                        : "text-gray-700 dark:text-gray-400 hover:text-orange-700"
                    }`}
                  >
                    {item?.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Contact Button */}
            <div className="mt-4 block lg:hidden">
              <Link href="/contact">
                <span className="block text-white bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:ring-blue-950 font-medium rounded-4xl text-sm px-4 py-2 text-center dark:bg-blue-950 dark:hover:bg-blue-900 dark:focus:ring-blue-950">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Inline CSS for sliding underline */}
      <style jsx>{`
        .menu-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background-color: #0a1172;
          transition: width 0.4s ease;
        }

        .menu-link.active::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
