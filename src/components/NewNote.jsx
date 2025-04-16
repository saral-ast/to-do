// import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addTodo } from "../features/todo/todoSlice";
import { useForm } from "react-hook-form";

const NewNote = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { title } = data;
    if (title.trim()) {
      dispatch(addTodo({ title: title })).then(() => {
        toast.success("Created successfully!");
        setTimeout(() => navigate("/notes"), 800); // give toast time to show
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create New To-do
        </h1>
        <ToastContainer />

        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <input
            {...register("title", {
              required: "Please enter a title!",
              maxLength: {
                value: 20,
                message: "Title must be less than 20 characters",
              },
            })}
            placeholder="Enter your title..."
            defaultValue={'gdfgdgdf'}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className={`w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none ${
              errors.title ? "border-red-500" : " focus:ring-blue-500"
            }`}
          />
          {errors.title && (
            <p className="text-sm text-red-600 mt-0 mb-3">
              {errors.title.message}
            </p>
          )}
          <input
            type="submit"
            value="Save"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 mb-3"
          />
        </form>

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
