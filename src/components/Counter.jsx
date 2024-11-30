
import React from 'react';

const Counter = ({ boysCount, girlsCount }) => {
  return (
    <div className="counter-container">
      <div className="counter">
        <h2>Regalos para Niños</h2>
        <p>{boysCount}</p>
        <p>Meta: 40</p>
      </div>
      <div className="counter">
        <h2>Regalos para Niñas</h2>
        <p>{girlsCount}</p>
        <p>Meta: 40</p>
      </div>
    </div>
  );
};

export default Counter;
