import React, { useState } from "react";
import { Container } from "../../Container.styled";
import restaurants from "../../restaurants.json";
import Restaurant from "../../components/Restaurant/Restaurant";
import { Title } from "./Home.styled";

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
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(menuItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <main>
      <Container>
        <Title>Delicious delivery</Title>
        {restaurants.shops.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            expanded={restaurant.id === expandedRestaurantId}
            onRestaurantClick={handleRestaurantClick}
            addToCart={handleAddToCart}
          />
        ))}
      </Container>
    </main>
  );
};

export default Home;
