import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CandyList from './components/CandyList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [candies, setCandies] = useState([
    // Initial candy list data
    {
      id: 1,
      name: 'Candy 1',
      description: 'Description 1',
      price: 2.99,
    },
    {
      id: 2,
      name: 'Candy 2',
      description: 'Description 1',
      price: 32,
    },
    {
      id: 3,
      name: 'Candy 3',
      description: 'Description 1',
      price: 31,
    },
    {
      id: 4,
      name: 'Candy 4',
      description: 'Description 1',
      price: 10,
    },
    // Add more candies here
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (candy) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === candy.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...candy, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const updateQuantity = (id, action) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        if (action === 'increment') {
          item.quantity += 1;
        } else if (action === 'decrement' && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <div className="App">
      <Navbar cartCount={cartItems.length} />
      <CandyList candies={candies} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;
