import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from 'src/types/types';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().lean().exec();
  }

  async findOne(id: string): Promise<Item> {
    const item = await this.itemModel.findById(id).lean().exec();
    if (!item) {
      throw new NotFoundException(`item #${id} not found`);
    }
    return item;
  }

  async addItems(items: Item[]): Promise<Item[]> {
    const operations = items.map((item) =>
      this.itemModel.findOneAndUpdate(
        { name: item.name }, // Condition to find the item by name
        item, // New item data
        {
          new: true, // Return the updated item data
          upsert: true, // Create a new item if it doesn't exist
        },
      ),
    );

    return await Promise.all(operations);
  }
}
