import { IsString, IsNotEmpty } from 'class-validator';

export class ItemDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  isChecked: boolean;
}
