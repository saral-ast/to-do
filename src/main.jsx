import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./routes/route.js";

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />   
);
