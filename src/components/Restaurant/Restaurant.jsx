import React from 'react';
import { Container } from '../../Container.styled';
import {ImageMenu, ItemMenu, List, Title} from "./Restaurant.styled";
import { renderImage } from '../ImagesUtils.jsx/ImageRender'


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
    <Container>
      <div onClick={handleRestaurantClick}>
        <Title>{name}</Title>
        {expanded && (
          <ItemMenu>
            {menu.map((menuItem, index) => (
              <List key={index}>
                <div>{menuItem.name}</div>
                <ImageMenu>
                {renderImage(menuItem.image)}
                </ImageMenu>
                <button onClick={(event) => handleMenuClick(menuItem, event)}>Добавить в корзину</button>
              </List>
            ))}
          </ItemMenu>
        )}
      </div>
    </Container>
  );
};

export default Restaurant;
