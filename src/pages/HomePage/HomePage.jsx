import React from "react";
import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";
import { fullNameAtom } from "../../stores/User/User";
import { skillsAtom } from "../../stores/Skills/Skills";

const HomePage = () => {
  const fullName = useAtomValue(fullNameAtom);
  const skills = useAtomValue(skillsAtom);

  return (
    <section id="hero1" className="hero">
      <div className="inner">
        <div className="copy">
          <h1>Bienvenue {fullName || "inconnu"} !</h1>
          <>
          <p>Vos compétences</p>
          </>
          {skills.length > 0 ? (
            <div className="skill-div">
              {skills.map((skill, index) => (
                <div className="skill-card" key={index}>🚀 {skill}</div>
              ))}
            <p>Modifier vos <Link to="/profile">compétences</Link></p>
            </div>
          ) : (
            <p>Va modifier ton <Link to="/profile">profile</Link> pour ajouter tes compétences ninja-boy.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;