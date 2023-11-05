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
import { List } from 'src/types/types';

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
