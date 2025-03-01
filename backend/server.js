import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


connectDB(); 


app.use(cors());
app.use(express.json());


import userRoutes from './routes/userRoutes.js';
import restaurantRoutes from './routes/restaurantRoutes.js';
import orderRoutes from './routes/orderRoutes.js';


app.use('/api/users', userRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send('Zomato Clone Backend is running!');
  });
  


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
