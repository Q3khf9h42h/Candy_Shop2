// Candy.js
import React from 'react';

const Candy = ({ candy, addToCart }) => {
  return (
    <div className="candy">
      <h3>{candy.name}</h3>
      <p>{candy.description}</p>
      <p>${candy.price}</p>
      <button onClick={() => addToCart(candy)}>Add to Cart</button>
    </div>
  );
};

export default Candy;
