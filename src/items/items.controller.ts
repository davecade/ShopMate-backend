import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from 'src/types/types';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemservice: ItemsService) {}

  // GET /items: Retrieve all items.
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemservice.findAll();
  }

  // GET /items/:id: Retrieve a specific list by ID.
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.itemservice.findOne(id);
  }

  // POST /items: Create a new items.
  @Post()
  async addItems(@Body() items: Item[]): Promise<Item[]> {
    return this.itemservice.addItems(items);
  }
}
