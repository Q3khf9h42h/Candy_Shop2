// CandyList.js
import React, { useState } from 'react';
import Candy from './Candy';

const CandyList = ({ candies, addToCart }) => {
  return (
    <div className="candy-list">
      {candies.map((candy, index) => (
        <Candy key={index} candy={candy} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default CandyList;
