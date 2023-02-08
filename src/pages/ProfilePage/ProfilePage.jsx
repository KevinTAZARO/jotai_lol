import React from "react";

const ProfilePage = () => {
  return (
    <section id="hero1" className="hero">
      <div className="inner">
        <div className="copy">
          <h1>Mon profil</h1>
          <form>
            <div className="form-group">
              <div>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" />
              </div>
              <div>
                <label htmlFor="prenom">Prenom</label>
                <input type="text" id="prenom" name="prenom" />
              </div>
            </div>
            <div className="competences">
              <div className="col">
                <label htmlFor="compétences">Compétences</label>
                <input
                  type="type"
                  placeholder="Vos compétences, séparées par des virgules"
                  id="competences"
                  name="competences"
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
