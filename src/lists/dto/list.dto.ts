import { IsString, IsArray, IsNotEmpty, ArrayMinSize } from 'class-validator';
import { ItemDto } from './item.dto';

export class ListDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(0) // assuming a list should have at least one item
  items: ItemDto[]; // Reference to another DTO for individual items
}
