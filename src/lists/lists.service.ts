import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListDto } from './dto/list.dto';
import { List, ListItem } from '../types/types';
import { ItemsService } from 'src/items/items.service';

@Injectable()
export class ListsService {
  constructor(
    @InjectModel('List') private readonly listModel: Model<List>,
    private readonly itemsService: ItemsService,
  ) {}

  async findAll(): Promise<List[]> {
    try {
      console.log('ListsService.findAll()');
      return await this.listModel.find().lean().exec();
    } catch (error) {
      console.error('Error fetching lists:', error);
      throw error; // Or handle the error as needed
    }
  }

  async findOne(id: string): Promise<List> {
    const list = await this.listModel.findById(id).lean().exec();

    if (!list) {
      throw new NotFoundException(`List #${id} not found`);
    }

    return list;
  }

  async create(createListDto: ListDto): Promise<List> {
    const newList = new this.listModel(createListDto);
    return await newList.save();
  }

  async update(id: string, updateListDto: ListDto): Promise<List> {
    const updatedList = await this.listModel.findByIdAndUpdate(
      id,
      updateListDto,
      {
        new: true,
      },
    );
    if (!updatedList) {
      throw new NotFoundException(`List #${id} not found`);
    }
    return updatedList;
  }

  async delete(id: string): Promise<List> {
    const deletedList = await this.listModel.findByIdAndRemove(id);
    if (!deletedList) {
      throw new NotFoundException(`List #${id} not found`);
    }
    return deletedList;
  }

  async addItem(listId: string, newItem: ListItem): Promise<List> {
    const list = await this.listModel.findById(listId);

    if (!list) {
      throw new NotFoundException(`List #${listId} not found`);
    }

    // Push the new item to the items array and save the list
    list.items.push(newItem);

    // Save the modified list
    await list.save();

    return list;
  }
}
