import { SetMetadata } from '@nestjs/common';
import { Role } from '../interfaces/access.interface';

// Simple example of custom decorator
export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
