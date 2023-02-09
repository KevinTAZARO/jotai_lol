import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { skillsAtom } from "../../stores/Skills/Skills";
import { firstNameAtom, lastNameAtom } from "../../stores/User/User";

const ProfilePage = () => {
  const [firstName, setFirstName] = useAtom(firstNameAtom);
  const [lastName, setLastName] = useAtom(lastNameAtom);
  const [skills, setSkills] = useAtom(skillsAtom);

  const [formValues, setFormValues] = useState({
    name: firstName ? firstName : "",
    prenom: lastName ? lastName : "",
    competences: skills ? skills : "",
  });

  useEffect(() => {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Skills:", skills);
  }, [firstName, lastName, skills]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const filteredSkills = formValues.competences
      .split(",")
      .map((skill) => skill.trim());

    setFirstName(formValues.name);
    setLastName(formValues.prenom);
    setSkills(filteredSkills);
  };

  return (
    <section id="hero1" className="hero">
      <div className="inner">
        <div className="copy">
          <h1>Mon profil</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="prenom">Prenom</label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formValues.prenom}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="competences">
              <div className="col">
                <label htmlFor="competences">Compétences</label>
                <input
                  type="text"
                  placeholder="Vos compétences, séparées par des virgules"
                  id="competences"
                  name="competences"
                  value={formValues.competences}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="savebtn">
              <button type="submit">SAUVEGARDER</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
