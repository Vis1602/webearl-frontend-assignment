import React from "react";
import aboutImage from "../assets/about-image.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 bg-white">
      <div className="lg:w-1/2 w-full flex items-center justify-center">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full max-w-md rounded-xl "
        />
      </div>
      {/* Left Side: Text + Stats */}
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Nulla lobortis nunc vitae purus facilisis
        </h2>
        <p className="text-gray-600 mb-6">
          Vestibulum sit amet tortor libero lobortis semper at et odio. In eu
          tellus tellus. Pellentesque ullamcorper ultrices. Aenean facilisis
          vitae purus facilisis semper.
        </p>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">+200</h3>
            <div className="h-1 w-8 bg-blue-500 mx-auto my-2 rounded"></div>
            <p className="text-sm text-gray-600">EMPLOYEE</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">+500</h3>
            <div className="h-1 w-8 bg-blue-500 mx-auto my-2 rounded"></div>
            <p className="text-sm text-gray-600">PROJECT</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">+300</h3>
            <div className="h-1 w-8 bg-blue-500 mx-auto my-2 rounded"></div>
            <p className="text-sm text-gray-600">CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
