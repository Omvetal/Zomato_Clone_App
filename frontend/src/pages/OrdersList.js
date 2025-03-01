import React, { useState, useEffect } from "react";
import { getOrders } from "../api/api";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      if (!token) return alert("You must be logged in to view orders!");

      try {
        const data = await getOrders(token);
        setOrders(data);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>My Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            {order.restaurant} - ₹{order.totalAmount} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersList;
