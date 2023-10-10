// Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => updateQuantity(item.id, 'increment')}>+</button>
            <button onClick={() => updateQuantity(item.id, 'decrement')}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
