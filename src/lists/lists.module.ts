import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ListSchema } from './schemas/list.schema';
import { ItemsModule } from 'src/items/items.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'List', schema: ListSchema }]),
    ItemsModule,
  ],
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule {}
