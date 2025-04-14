import React from 'react'
import { RouterProvider } from "react-router";
import router from "./routes/route.js";
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App