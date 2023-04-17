import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { DummyDb } from '../common/services/dummy-db.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class RegistrationService {
  constructor(private db: DummyDb, private eventEmitter: EventEmitter2) {}

  async create(user: User): Promise<{ id: string; user: User }> {
    const recordId = await this.db.insert('users', user);

    // Emit the event to all listeners (user.* or user.registration)
    // Better to use an interface or model when passing the data, but for a clean demo we will use an object
    this.eventEmitter.emit('user.registration', {
      id: recordId,
      user,
    });

    // Return
    return {
      id: recordId,
      user,
    };
  }
}
