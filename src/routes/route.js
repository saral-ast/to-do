import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "../components/Layout";
import Notes from "../components/Notes";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "contact",    
                Component: Contact
            },
            {
                path: "notes",
                Component:Notes
            }
        ]
    },
    

]);

export default router;

