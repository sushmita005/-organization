import { FaPaintBrush, FaCode } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
export default function ServicesPage() {
  return (
    <div className="text-center  px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">What We Do</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Lorem Ipsum is simply dummy text of the printing and type setting
        industry when an unknown printer took a galley of type and scrambled it
        to make a type specimen book. It has survived not only five centuries.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Graphic Design */}
        <div className="bg-white  rounded-xl w-72 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="w-full h-44 flex items-center justify-center">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg"
              alt="Graphic Design"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
            />
          </div>
          <div className="flex justify-center -mt-6 mb-2">
            {/* <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
              <FaPaintBrush />
            </div> */}
          </div>
          <h2 className="text-lg font-semibold mb-2">Graphic Design</h2>
          <p className="text-gray-600 px-4 mb-4">
            Create stunning visuals and designs that captivate your audience and
            bring your ideas to life.
          </p>
        </div>

        {/* Web Design */}
        <div className="bg-white rounded-xl w-72 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="w-full h-44 flex items-center justify-center">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/typing-code-3d-icon-download-in-png-blend-fbx-gltf-file-formats--developing-homepage-developers-office-coding-on-laptop-web-development-pack-seo-icons-6805475.png?f=webp"
              alt="Web Design"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
            />
          </div>
          <div className="flex justify-center -mt-6 mb-2">
            {/* <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
              <FaComputer />
            </div> */}
          </div>
          <h2 className="text-lg font-semibold mb-4">Web Design</h2>
          <p className="text-gray-600 px-4 mb-4">
            Design user-friendly and visually appealing websites that enhance
            user experience and engagement.
          </p>
        </div>

        {/* Web Development */}
        <div className="bg-white  rounded-xl w-72 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="w-full h-44 flex items-center justify-center">
            <img
              // src="https://img.freepik.com/premium-psd/code-3d-icon_235528-2414.jpg"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/coding-file-3d-icon-download-in-png-blend-fbx-gltf-formats--code-format-pack-website-development-icons-5709008.png?f=webp"
              alt="Web Development"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
            />
          </div>
          <div className="flex justify-center -mt-6 mb-2">
            {/* <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
              <FaCode />
            </div> */}
          </div>
          <h2 className="text-lg font-semibold mb-4">Web Development</h2>
          <p className="text-gray-600 px-4 mb-4">
            Build robust and scalable web applications using modern technologies
            to meet your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}
