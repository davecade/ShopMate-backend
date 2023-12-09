import { ObjectId } from 'mongoose';

export type List = {
  _id: ObjectId;
  name: string;
  items: ListItem[] | Item[];
};

export type ListItem = {
  _id: ObjectId;
  name: string;
  quantity: number;
  price: number;
  isBought: boolean;
};

export type Item = {
  _id: ObjectId;
  name: string;
  price: number;
};
