import React from "react";
import NavItem from "./NavItem";
import Header from "./Header";

const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <Header />
        <ul className="flex flex-wrap gap-4 sm:gap-6 list-none">
          <NavItem url="/" name="Home" />
          <NavItem url="/about" name="About" />
          <NavItem url="/contact" name="Contact" />
          <NavItem url="/notes" name="Notes" />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
