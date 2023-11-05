import { ObjectId } from 'mongoose';

export type List = {
  _id: ObjectId;
  name: string;
  items: Item[];
};

export type Item = {
  _id: ObjectId;
  name: string;
  quantity: number;
  price: number;
  isBought: boolean;
};
