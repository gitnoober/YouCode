import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ExpressRequest } from '@app/types/expressRequest.interface';

@Injectable()
export class ArticleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<ExpressRequest>();
    // console.log('req.user from articleguard', request.user);
    if (request.user.type === 'adminuser') {
      return true;
    }
    throw new HttpException('Not Authorized', HttpStatus.UNAUTHORIZED);
  }
}
