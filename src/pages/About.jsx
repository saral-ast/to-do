import React from "react";
// import Layout from "../components/Layout";

const About = () => {
  return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-50 to-white px-6">
        <div className="max-w-3xl bg-white shadow-md rounded-2xl p-10 text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to our To-do App — your personal productivity companion.
            Whether you're planning your day or organizing projects, we aim to
            make task management simple and efficient.
          </p>
          <p className="text-gray-600 mt-4">
            Built with ❤️ using React and powered by creativity and caffeine.
          </p>
        </div>
      </div>
  
  );
};

export default About;
