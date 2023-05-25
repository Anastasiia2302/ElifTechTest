import React from "react";
import bigMacImage from "../../Images/big-mac.png";
import McDoubleImage from "../../Images/McDouble.png";
import chickenWingsImage from "../../Images/chicken-wings.png";
import frenchFriesImage from "../../Images/french-fries.png";
import pizzaImage from "../../Images/pizza.png";
import iceCreamImage from "../../Images/ice-cream.png";
import coffeeImage from "../../Images/coffee.png";
import saladImage from "../../Images/salad.png";
import colaImage from "../../Images/Cola.png";

export const renderImage = (imagePath) => {
  switch (imagePath) {
    case "./Images/big-mac.png":
      return <img src={bigMacImage} alt="Big Mac" />;
    case "./Images/McDouble.png":
      return <img src={McDoubleImage} alt="McDouble" />;
    case "./Images/chicken-wings.png":
      return <img src={chickenWingsImage} alt="Chicken Wings" />;
    case "./Images/french-fries.png":
      return <img src={frenchFriesImage} alt="French Fries" />;
    case "./Images/pizza.png":
      return <img src={pizzaImage} alt="Pizza" />;
    case "./Images/ice-cream.png":
      return <img src={iceCreamImage} alt="Ice Cream" />;
    case "./Images/coffee.png":
      return <img src={coffeeImage} alt="Coffee" />;
    case "./Images/salad.png":
      return <img src={saladImage} alt="Salad" />;
    case "./Images/Cola.png":
      return <img src={colaImage} alt="Cola" />;
    default:
      return null;
  }
};
