import React, { useState } from 'react';
import './styles.scss';

const Versus = () => {
  // Utilise useState pour stocker les URLs des images
  const [leftImage, setLeftImage] = useState('/images/image1.jpg');
  const [rightImage, setRightImage] = useState('/images/image2.jpg');

  return (
    <div className="versus-container">
      <div className="image-container">
        <div className="image-wrapper">
          <img src={leftImage} alt="Image 1" />
        </div>
      </div>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={rightImage} alt="Image 2" />
        </div>
      </div>
    </div>
  );
};

export default Versus;
