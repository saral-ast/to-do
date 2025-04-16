import React, { useEffect } from "react";

import { Link, useParams, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleTodo,
  selectError,
  selectLoading,
  selectTodo,
  updateTodo,
} from "../features/todo/todoSlice";
import { useForm } from "react-hook-form";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const todo = useSelector(selectTodo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { title } = data.title;
    if (title.trim()) {
      dispatch(updateTodo({ id, title }))
        .unwrap()
        .then(() => {
          toast.success("Updated successfully!");
          setTimeout(() => navigate("/notes"), 800);
        });
    }
  };

  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchSingleTodo(id));
  }, [dispatch, id]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <ToastContainer />
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        {loading && <p className="text-gray-500 text-center">Loading...</p>}
        {error && (
          <p className="text-red-600 text-center">Error: {error.message}</p>
        )}

        {!loading && !error && todo && (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Edit To-do
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("title", {
                  required: "Please enter a title!",
                  maxLength: {
                    value: 20,
                    message: "Title must be less than 20 characters",
                  },
                })}
                placeholder="Enter your title..."
                defaultValue={todo.title}
                onChange={(e) => e.target.value}
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
          </>
        )}
      </div>
    </div>
  );
};

export default EditNote;
