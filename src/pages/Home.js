import React, { useState } from 'react';
import restaurants from '../restaurants.json';
import Restaurant from './components/Restaurant ';

const Home = () => {
  const [expandedRestaurantId, setExpandedRestaurantId] = useState(null);

  const handleRestaurantClick = (restaurantId) => {
    if (expandedRestaurantId === restaurantId) {
      setExpandedRestaurantId(null);
    } else {
      setExpandedRestaurantId(restaurantId);
    }
  };

  const handleAddToCart = (menuItem) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(menuItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <div>
      <h1>Главная</h1>
      {restaurants.shops.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          expanded={restaurant.id === expandedRestaurantId}
          onRestaurantClick={handleRestaurantClick}
          addToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default Home;
