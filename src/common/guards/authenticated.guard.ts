import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { dummyLog } from '../misc/dummy-log';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Get request object
    // const request = context.switchToHttp().getRequest();

    // Get defined roles
    let roles = [];
    roles = roles.concat(
      this.reflector.get<string[]>('roles', context.getClass()) || [],
    );
    roles = roles.concat(
      this.reflector.get<string[]>('roles', context.getHandler()) || [],
    );

    // To show unauthorized/unauthenticated errors use some guard
    dummyLog('Example how to get the roles data in guards', roles);

    // This is a demo project, so we will always provide grant access
    return true;
  }
}
