import { Schema } from 'mongoose';

export const ItemSchema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    isChecked: { type: Boolean, required: true },
  },
  {
    collection: 'Items',
  },
);
