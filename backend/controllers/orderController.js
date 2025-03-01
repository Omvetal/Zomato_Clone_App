import Order from '../models/Order.js';


export const createOrder = async (req, res) => {
  try {
    if (!req.user || !req.user.userId) {
      return res.status(401).json({ message: 'Unauthorized access' });
    }

    const { restaurant, items, totalAmount } = req.body;
    const userId = req.user.userId;

    if (!restaurant || !items || !totalAmount) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newOrder = new Order({
      user: userId,
      restaurant,
      items,
      totalAmount,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error('Order Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


export const getOrders = async (req, res) => {
  try {
    if (!req.user || !req.user.userId) {
      return res.status(401).json({ message: 'Unauthorized access' });
    }

    const userId = req.user.userId;
    const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    console.error('Fetch Orders Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
