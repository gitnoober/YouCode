import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ExpressRequest } from '../../types/expressRequest.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(conext: ExecutionContext): boolean {
    const request = conext.switchToHttp().getRequest<ExpressRequest>(); // Will have access to user this way
    console.log('request.user from authguard', request.user);

    if (request.user) {
      return true;
    }

    throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
  }
}
