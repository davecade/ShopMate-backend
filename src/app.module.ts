import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ListsModule } from './lists/lists.module';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';
import { AuthenticateRequestMiddleware } from './middleware/authenticate-request.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // The config will be globally available
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    ListsModule,
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticateRequestMiddleware).forRoutes(
      { path: '*', method: RequestMethod.ALL }, // Apply to all routes
      // You can specify individual routes or controllers if needed
      // e.g., { path: 'lists', method: RequestMethod.GET }
    );
  }
}
