import React from "react";
import NavItem from "./NavItem";
import Header from "./Header";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-white shadow-md py-4 px-6">
      <Header />
      <ul className="flex gap-6 list-none">
        <NavItem url="/" name="Home" />
        <NavItem url="/about" name="About" />
        <NavItem url="/contact" name="Contact" />
        <NavItem url="/notes" name="Notes" />
      </ul>
    </nav>
  );
};

export default NavBar;
