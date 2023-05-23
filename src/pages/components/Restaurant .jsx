import React from 'react';

const Restaurant = ({ restaurant, expanded, onRestaurantClick, addToCart }) => {
  const { id, name, menu } = restaurant;

  const handleMenuClick = (menuItem, event) => {
    if (addToCart && typeof addToCart === 'function') {
      addToCart(menuItem);
    }
    event.stopPropagation();
  };

  const handleRestaurantClick = () => {
    if (onRestaurantClick && typeof onRestaurantClick === 'function') {
      onRestaurantClick(id);
    }
  };

  return (
    <div>
      <div onClick={handleRestaurantClick}>
        <h3>{name}</h3>
        {expanded && (
          <ul>
            {menu.map((menuItem, index) => (
              <li key={index}>
                <div>{menuItem.name}</div>
                <div>{menuItem.price}</div>
                <button onClick={(event) => handleMenuClick(menuItem, event)}>Добавить в корзину</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Restaurant;
