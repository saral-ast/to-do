import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
  
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6">
        <div className="text-center max-w-xl bg-white shadow-xl rounded-2xl p-10">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Welcome to To-do App
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Organize your day, track your tasks, and stay productive.
          </p>
          <Link
            to="/notes"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300"
          >
            View Your Tasks
          </Link>
        </div>
      </div>

  );
};

export default Home;
