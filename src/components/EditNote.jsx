import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleTodo, selectError, selectLoading, selectTodo, updateTodo } from "../features/todo/todoSlice";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)
  const todo = useSelector(selectTodo)
  const [title, setTitle] = useState('');
  // console.log(todo)
  const error = useSelector(selectError)
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  // const handleSave = async (title) => {
  //   if (title.trim()) {
  //     try {
  //       const response = await axios.put(`${apiUrl}/${id}`, { title });
  //       if (response.status === 200) {
  //         toast.success("Yeah Upadated successfully!");
  //         setTimeout(() => navigate("/notes"), 1500);
  //       }
  //     } catch (error) {
  //       console.error("Failed to update note:", error);
  //       toast.error("Something went wrong!");
  //     }
  //   } else {
  //     toast.warning("Title cannot be empty!");
  //   }
  // };

  const handleSave = () => {
    if (title.trim()) {
      dispatch(updateTodo({ id, title }))
      toast.success("Updated successfully!");
      setTimeout(() => navigate("/notes"), 1500);
    } else {
      toast.warning("Title cannot be empty!");
    }
  }

  // const fetchNote = async () => {
  //   try {
  //     const response = await axios.get(`${apiUrl}/${id}`);
  //     setTitle(response.data.title);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     setLoading(false);
  //   }
  // };
  useEffect(()=>{
    dispatch(fetchSingleTodo(id))
  },[dispatch, id])

  useEffect(()=>{
    if(todo){
      setTitle(todo.title)
    }
  },[todo])

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

            <input
              type="text"
              placeholder="Enter your title..."
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 mb-3"
              onClick={() => handleSave(title)}
            >
              Save
            </button>

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
