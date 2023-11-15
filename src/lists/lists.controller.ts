import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListDto } from './dto/list.dto';
import { Item, List } from 'src/types/types';

@Controller('lists')
export class ListsController {
  constructor(private readonly listService: ListsService) {}

  // GET /lists: Retrieve all lists.
  @Get()
  async findAll(): Promise<List[]> {
    return this.listService.findAll();
  }

  // GET /lists/:id: Retrieve a specific list by ID.
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.listService.findOne(id);
  }

  // POST /lists: Create a new list.
  @Post()
  async create(@Body() createListDto: ListDto): Promise<any> {
    return this.listService.create(createListDto);
  }

  // POST /lists/:id/items: Add a new item to a specific list.
  @Post(':id/items')
  async addItem(
    @Param('id') listId: string,
    @Body() newItem: Item, // Make sure this matches the structure of Item in your types
  ): Promise<List> {
    return this.listService.addItem(listId, newItem);
  }

  // PUT /lists/:id: Update a specific list by ID.
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateListDto: ListDto,
  ): Promise<any> {
    return this.listService.update(id, updateListDto);
  }

  // DELETE /lists/:id: Delete a specific list by ID.
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.listService.delete(id);
  }
}
