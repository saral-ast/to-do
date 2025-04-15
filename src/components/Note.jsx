import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  fetchSingleTodo,
  selectError,
  selectLoading,
  selectTodo,
} from "../features/todo/todoSlice";

const Note = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const note = useSelector(selectTodo);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const fetchNote = () => {
    dispatch(fetchSingleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id))
      .unwrap()
      .then(() => {
        toast.success("Deleted successfully!");
        setTimeout(() => navigate("/notes"), 800);
      })
      .catch(() => {
        toast.error("Failed to delete the note.");
      });
  };

  useEffect(() => {
    fetchNote();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-8 space-y-6 border border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">📝 Note Details</h1>
          <Link
            to="/notes"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            ← Back
          </Link>
        </div>

        {loading && <p className="text-gray-500 animate-pulse">Loading...</p>}
        {error && (
          <p className="text-red-600 bg-red-50 p-2 rounded-md border border-red-200">
            Error: {error.message}
          </p>
        )}

        {!loading && !error && note && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">ID</p>
              <p className="text-gray-800 font-semibold">{note.id}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Title</p>
              <p className="text-gray-800 text-lg font-medium">{note.title}</p>
            </div>
            <div className="text-sm text-gray-400">
              Created: {new Date(note.createdAt).toLocaleString()}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={handleDelete}
                  className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg shadow transition"
                >
                  🗑️ Delete
                </button>
                <Link
                  to={`/notes/${id}/edit`}
                  className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow transition text-center"
                >
                  ✏️ Edit
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Note;
