import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
              <input
                type="number"
                value={item.quantity}
                min={1}
                max={5}
                onChange={(e) => handleUpdateQuantity(item, e.target.value)}
              />
            </div>
          </li>
        ))}
      </ul>
      <div>Total: {calculateTotal()}</div>
      <form onSubmit={handleSubmitOrder}>
        <h2>Order Form</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default ShoppingCart;
