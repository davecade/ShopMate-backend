import { Controller, Get, Param } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemservice: ItemsService) {}

  // GET /lists/:id: Retrieve a specific list by ID.
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.itemservice.findOne(id);
  }
}
