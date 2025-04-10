import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Note = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchNote = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/${id}`
      );
      setNote(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${apiUrl}/${id}`
      );
      toast.success("Deleted successfully!");
      setTimeout(() => navigate("/notes"), 1500);
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete the note.");
    }
  };

  useEffect(() => {
    fetchNote();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Note Details</h1>

        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-600">Error: {error.message}</p>}

        {!loading && !error && note && (
          <>
            <div className="space-y-2 mb-6">
              <p className="text-gray-700">
                <span className="font-medium">ID:</span> {note.id}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Title:</span> {note.title}
              </p>
              <p className="text-gray-500 text-sm">
                Created: {new Date(note.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition"
                >
                  🗑️ Delete
                </button>
                <Link
                  to={`/notes/${id}/edit`}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition"
                >
                  ✏️ Edit
                </Link>
              </div>

              <Link
                to="/notes"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                ← Back to Notes
              </Link>
            </div>
          </>
        )}
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Note;
