import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.scss';

const Home = () => {
  const [pseudo, setPseudo] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setPseudo(e.target.value);
  };

  const handleSubmit = () => {
    console.log(`Pseudo soumis : ${pseudo}`);
    setIsSubmitted(true);

    // Redirige vers la page des versus une fois le pseudo soumis
    navigate("/versus");
  };

  return (
    <div className="home-container">
      <h1>{isSubmitted ? `Bienvenue, ${pseudo} !` : 'Entrez votre pseudo :'}</h1>
      {!isSubmitted && (
        <div>
          <input
            type="text"
            placeholder="Votre pseudo"
            value={pseudo}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Valider</button>
        </div>
      )}
    </div>
  );
};

export default Home;
