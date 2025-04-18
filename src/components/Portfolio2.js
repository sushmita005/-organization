// components/PortfolioGallery.js
"use client";
// components/PortfolioGallery.js
import { useState } from "react";
import {
  FaGlobe,
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaPlug,
  FaTools, // Development icons
  FaHashtag,
  FaSearch,
  FaChartLine,
  FaBullseye, // Marketing icons
} from "react-icons/fa";

const PortfolioGallery = () => {
  const [activeTab, setActiveTab] = useState("development");
  const [activeCategory, setActiveCategory] = useState(null);

  // Icons for development categories
  const developmentIcons = {
    "web-dev": <FaGlobe className="text-blue-950" size={28} />,
    "web-app": <FaLaptopCode className="text-blue-950" size={28} />,
    "mobile-app": <FaMobileAlt className="text-blue-950" size={28} />,
    "ui-ux": <FaPalette className="text-blue-950" size={28} />,
    api: <FaPlug className="text-blue-950" size={28} />,
    maintenance: <FaTools className="text-blue-950" size={28} />,
  };

  // Icons for marketing categories
  const marketingIcons = {
    "social-media": <FaHashtag className="text-blue-950" size={28} />,
    seo: <FaSearch className="text-blue-950" size={28} />,
    performance: <FaChartLine className="text-blue-950" size={28} />,
    "lead-gen": <FaBullseye className="text-blue-950" size={28} />,
  };

  const developmentCategories = [
    {
      id: "web-dev",
      name: "Web Development",
      description: "Custom websites tailored to your business needs",
    },
    {
      id: "web-app",
      name: "Web App",
      description: "Interactive web applications with modern frameworks",
    },
    {
      id: "mobile-app",
      name: "Mobile App",
      description: "iOS and Android apps for your business",
    },
    {
      id: "ui-ux",
      name: "UI/UX",
      description: "Beautiful and intuitive user interfaces",
    },
    {
      id: "api",
      name: "API",
      description: "Robust backend services and integrations",
    },
    {
      id: "maintenance",
      name: "Maintenance",
      description: "Ongoing support and updates",
    },
  ];

  const marketingCategories = [
    {
      id: "social-media",
      name: "Social Media",
      description: "Engaging content and strategic campaigns",
    },
    {
      id: "seo",
      name: "SEO",
      description: "Improve your visibility in search results",
    },
    {
      id: "performance",
      name: "Performance",
      description: "Data-driven campaigns for maximum ROI",
    },
    {
      id: "lead-gen",
      name: "Lead Gen",
      description: "Targeted strategies to grow your customer base",
    },
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-full bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Our Portfolio</h1>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => {
              setActiveTab("development");
              setActiveCategory(null);
            }}
            className={`py-4 px-6 font-medium text-sm focus:outline-none ${
              activeTab === "development"
                ? "border-b-2 border-blue-950 text-blue-950"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Development Services
          </button>
          <button
            onClick={() => {
              setActiveTab("marketing");
              setActiveCategory(null);
            }}
            className={`py-4 px-6 font-medium text-sm focus:outline-none ${
              activeTab === "marketing"
                ? "border-b-2 border-blue-950 text-blue-950"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Marketing Services
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "development" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {developmentCategories.map((category) => (
              <div
                key={category.id}
                className="relative group h-40 overflow-hidden rounded-lg shadow-md bg-white cursor-pointer hover:shadow-2xl transition-transform transition-shadow duration-300 hover:scale-95"
                onClick={() => handleCategoryClick(category.id)}
              >
                {/* Card Front (Icon + Title) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:-translate-y-full">
                  <div className="mb-3">{developmentIcons[category.id]}</div>
                  <h3 className="text-lg font-semibold text-center text-gray-800">
                    {category.name}
                  </h3>
                </div>

                {/* Card Back (Title + Description) - Slides up on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-blue-950 transition-all duration-300 translate-y-full group-hover:translate-y-0">
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-100 text-center">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketingCategories.map((category) => (
              <div
                key={category.id}
                className="relative group h-40 overflow-hidden rounded-lg shadow-md bg-white cursor-pointer hover:shadow-2xl transition-transform transition-shadow duration-300 hover:scale-95"
                onClick={() => handleCategoryClick(category.id)}
              >
                {/* Card Front (Icon + Title) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:-translate-y-full">
                  <div className="mb-3">{marketingIcons[category.id]}</div>
                  <h3 className="text-lg font-semibold text-center text-gray-800">
                    {category.name}
                  </h3>
                </div>

                {/* Card Back (Title + Description) - Slides up on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-blue-950 transition-all duration-300 translate-y-full group-hover:translate-y-0">
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-100 text-center">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Full Screen View */}
      {activeCategory && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {activeTab === "development"
                  ? developmentCategories.find((c) => c.id === activeCategory)
                      .name
                  : marketingCategories.find((c) => c.id === activeCategory)
                      .name}
              </h2>
              <button
                onClick={() => setActiveCategory(null)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-lg h-64 flex items-center justify-center"
                >
                  <span className="text-gray-400">Project {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGallery;
