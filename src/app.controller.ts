import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async customScript(): Promise<any> {
    return null;
  }

  //  GET /: An application status or welcome message.
  // GET /health: A health-check endpoint for monitoring purposes.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
