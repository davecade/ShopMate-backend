import { Schema } from 'mongoose';
import { ItemSchema } from './item.schema';

export const ListSchema = new Schema(
  {
    name: { type: String, required: true },
    items: { type: [ItemSchema], required: true },
  },
  {
    collection: 'Lists',
  },
);
