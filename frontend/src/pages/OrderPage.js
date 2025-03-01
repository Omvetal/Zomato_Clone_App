import React, { useState } from "react";
import { placeOrder } from "../api/api";

const OrderPage = () => {
  const [restaurant, setRestaurant] = useState("");
  const [items, setItems] = useState([{ name: "", quantity: 1, price: 0 }]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); 
    if (!token) return alert("You must be logged in to place an order!");

    try {
      const orderData = { restaurant, items, totalAmount };
      const response = await placeOrder(orderData, token);
      alert(response.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Place an Order</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Restaurant Name" value={restaurant} onChange={(e) => setRestaurant(e.target.value)} required />
        {items.map((item, index) => (
          <div key={index}>
            <input type="text" placeholder="Item Name" value={item.name} onChange={(e) => {
              const newItems = [...items];
              newItems[index].name = e.target.value;
              setItems(newItems);
            }} required />
            <input type="number" placeholder="Quantity" value={item.quantity} onChange={(e) => {
              const newItems = [...items];
              newItems[index].quantity = e.target.value;
              setItems(newItems);
            }} required />
            <input type="number" placeholder="Price" value={item.price} onChange={(e) => {
              const newItems = [...items];
              newItems[index].price = e.target.value;
              setItems(newItems);
            }} required />
          </div>
        ))}
        <button type="button" onClick={() => setItems([...items, { name: "", quantity: 1, price: 0 }])}>
          Add Item
        </button>
        <input type="number" placeholder="Total Amount" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderPage;
