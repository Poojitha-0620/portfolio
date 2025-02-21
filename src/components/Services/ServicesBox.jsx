import React from 'react';
import { FaLaptopCode, FaCode, FaServer, FaCloudUploadAlt } from "react-icons/fa";

const ServicesData = [
    {
        name: "Full-Stack Web Development",
        icon: <FaLaptopCode className="text-4xl text-white" />,
        bgColor: "bg-blue-600",
    },
    {
        name: "Front-End Development",
        icon: <FaCode className="text-4xl text-white" />,
        bgColor: "bg-green-600",
    },
    {
        name: "Back-End & API Integration",
        icon: <FaServer className="text-4xl text-white" />,
        bgColor: "bg-purple-600",
    },
    {
        name: "Deployment & Cloud Solutions",
        icon: <FaCloudUploadAlt className="text-4xl text-white" />,
        bgColor: "bg-orange-600",
    },
];

const ServicesBox = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl px-6">
        {ServicesData.map(({ name,  icon, bgColor }, index) => (
          <div key={index} className={`p-6 ${bgColor} h-[170px] rounded-xl text-white shadow-lg flex flex-col items-center text-center`}>
            {icon}
            <h1 className="text-lg font-semibold mt-3">{name}</h1>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;


