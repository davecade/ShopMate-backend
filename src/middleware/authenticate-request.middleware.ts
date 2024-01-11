import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthenticateRequestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const secretKey = req.headers.authorization?.split(' ')[1];
    if (secretKey !== process.env.API_SECRET_KEY) {
      console.log('Unauthorized Request');
      throw new UnauthorizedException('User is not authorized');
    }
    next();
  }
}
