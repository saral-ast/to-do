import { Outlet } from "react-router";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <NavBar />

      {/* Main content area */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-xl shadow-md overflow-hidden">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
