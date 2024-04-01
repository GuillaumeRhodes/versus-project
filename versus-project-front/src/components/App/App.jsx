import React, { useState } from 'react';
import StartButton from '../Versus/StartButton/StartButton';
import Images from '../Versus/Images/Images';
import Vote from '../Versus/Vote/Vote';
import NextButton from '../Versus/NextButton/NextButton';

const App = () => {
    const [images, setImages] = useState([]);
    const [pourcentages, setPourcentages] = useState({});
    const [etape, setEtape] = useState('commencer');

    const handleCommencer = () => {
        // Ici, vous pouvez mettre en place la logique pour récupérer les deux premières images depuis l'API
        // et les stocker dans l'état images
        // Une fois les images récupérées, passez à l'étape suivante
        setEtape('vote');
      };
      
      const handleSuivant = () => {
        // Ici, vous pouvez mettre en place la logique pour récupérer les deux images suivantes depuis l'API
        // et les stocker dans l'état images
        // Une fois les images récupérées, passez à l'étape suivante
      };
      

    return (
        <div>
          {etape === 'commencer' && <StartButton onClick={handleCommencer} />}
          {etape === 'vote' && (
            <>
              <Images image1={images[0]} image2={images[1]} onClick={handleVote} />
              <Vote pourcentage1={pourcentages[1]} pourcentage2={pourcentages[2]} />
              <NextButton onClick={handleSuivant} />
            </>
          )}
        </div>
      );
      
  };
  
  export default App;