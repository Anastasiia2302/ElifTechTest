import React, { useState, useEffect } from 'react';

import {Container} from "../../Container.styled";
import { Form, FormGroup, FormInput, FormLabel, MenuOrder, Order, OrderContainer, Quantity, Title, Total } from './ShoopingCart.styled';



const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (savedCartItems.length === 0) {
      setCartItems(savedCartItems);
    } else {
      const updatedCartItems = savedCartItems.map((item) => ({ ...item, quantity: 1 }));
      setCartItems(updatedCartItems);
    }
  }, []);

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleUpdateQuantity = (item, quantity) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: parseInt(quantity) };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      const price = parseFloat(item.price);
      const quantity = parseFloat(item.quantity);
      total += price * quantity;
    }
    return total.toFixed(2);
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();

    handleClearCart();
    setName('');
    setEmail('');
    setAddress('');
    setPhone('');
  };

  return (
    <Container>
      
      <OrderContainer>
      <Order>
      <Form onSubmit={handleSubmitOrder}>
        <Title>Order Form</Title>
        <FormGroup>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <FormInput
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="address">Address:</FormLabel>
          <FormInput
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="phone">Phone:</FormLabel>
          <FormInput
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>
        
        <button type="submit">Place Order</button>
      </Form>
      </Order>
        <Order>
      <Title>Ordering</Title>
      <ul>
        {cartItems.map((item) => (
          <MenuOrder key={item.id}>
            <FormLabel>{item.name}</FormLabel>
            <FormLabel>{item.price}</FormLabel>
            <div>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
              <Quantity
                type="number"
                value={item.quantity}
                min={1}
                max={5}
                onChange={(e) => handleUpdateQuantity(item, e.target.value)}
              />
            </div>
          </MenuOrder>
        ))}
      </ul>
      <Total>Total: {calculateTotal()}</Total>
      </Order>
      
      
      </OrderContainer>
    </Container>
  );
};

export default ShoppingCart;
