import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    restaurant: {
      type: String,
      required: true,
    },
    items: [
      {
        name: String,
        quantity: Number,
        price: Number,
      }
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Delivered'],
      default: 'Pending',
    }
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;
