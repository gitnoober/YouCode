import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ExpressRequest } from '@app/types/expressRequest.interface';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '../../config';
import { UserService } from '@app/user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {} //inject userservice to here so that, getById is possible
  async use(req: ExpressRequest, _: Response, next: NextFunction) {
    console.log('authMiddle', req.headers);
    if (!req.headers.authorization) {
      req.user = null;
      next(); // won't switch control to the controller without this
      return;
    }

    const token = req.headers.authorization.split(' ')[1];
    try {
      const decode = verify(token, JWT_SECRET);
      const user = await this.userService.getById(decode.id);
      req.user = user;
      // console.log('decode', decode);
      next();
    } catch (err) {
      req.user = null;
      next();
    }
  }
}
