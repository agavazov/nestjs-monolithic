import { NestMiddleware, Injectable } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { dummyLog } from '../misc/dummy-log';

@Injectable()
export class UserTokenMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    // Get JWT token from authorization nearer
    const jwtToken = req.headers?.authorization?.replace(/^Bearer /, '');

    // Example how to handle the JWT token
    // Don't break the process here!
    // To show unauthorised/unauthenticated error use some guard
    dummyLog('Example of how to inject the JWT Token', jwtToken);

    // Transport the use data in request.user
    next();
  }
}
