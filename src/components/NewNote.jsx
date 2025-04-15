// import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addTodo } from "../features/todo/todoSlice";

const NewNote = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const apiUrl = import.meta.env.VITE_API_URL;

  // const handleSave = async () => {
  //   if (title.trim()) {
  //     try {
  //       const response = await axios.post(
  //         `${apiUrl}`,
  //         { title }
  //       );

  //       if (response.status === 201 || response.status === 200) {
  //         toast.success("Created successfully!");
  //         setTitle("");
  //         setTimeout(() => navigate("/notes"), 1500); // give toast time to show
  //       }
  //     } catch (error) {
  //       console.error("Failed to create to-do:", error);
  //       toast.error("Something went wrong!");
  //     }
  //   } else {
  //     toast.warn("Please enter a title!");
  //   }
  // };
  const handleSave = () => {
       if(title.trim()){
           dispatch(addTodo({title}))
           .then(() => {
               toast.success("Created successfully!");
               setTitle("");
               setTimeout(() => navigate("/notes"), 800); // give toast time to show
           })
          //  toast.success("Created successfully!");
          //  setTitle("");
          //  setTimeout(() => navigate("/notes"), 500); // give toast time to sho
       }else{
            toast.warning("Please enter a title!");
       }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create New To-do
        </h1>
        <ToastContainer />

        <input
          type="text"
          placeholder="Enter your title..."
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 mb-3"
          onClick={handleSave}
        >
          Save
        </button>

        <Link
          to="/notes"
          className="block text-center text-blue-600 hover:underline"
        >
          ← Back to Notes
        </Link>
      </div>
    </div>
  );
};

export default NewNote;
