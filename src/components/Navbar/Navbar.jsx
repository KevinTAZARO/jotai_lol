import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import Logo from "../../assets/react.svg";
import { useAtomValue } from "jotai";
import { fullNameAtom } from "../../stores/User/User";
import { skillsCountAtom } from "../../stores/Skills/Skills";

const Navbar = () => {
  const fullName = useAtomValue(fullNameAtom);
  const skillsCount = useAtomValue(skillsCountAtom);

  return (
    <div className="nav-work">
      <img src={Logo} alt="logo" />
      <div className="test">
        <AiOutlineHome />
        <Link to="/">Home</Link>
      </div>
      <div className="test">
        <BsPerson />
        <Link to="/profile">Profile</Link>
      </div>
      <section className="ninja">
        <h3>
          {fullName || "Inconnu"}</h3>
          <small>({skillsCount || 0} compétences)</small>
      </section>
    </div>
  );
};

export default Navbar;
