import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import Logo from "../../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="nav-work">
      <img className="logo" src={Logo} alt="logo" />
      <ul>
        <li>
          <AiOutlineHome />
          <Link to="/">Home</Link>
        </li>
        <li>
          <BsPerson />
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
