import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class LoggerListener {
  @OnEvent('user.*')
  handleOrderCreatedEvent(event) {
    console.log('👂 logger.listener.ts', 'LOG ANY EVENT WITH USERS', event);
  }
}
