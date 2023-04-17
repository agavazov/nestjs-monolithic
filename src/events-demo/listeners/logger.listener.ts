import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class LoggerListener {
  @OnEvent('user.*')
  async handleAllUserEvents(eventData) {
    console.log('👂 logger.listener.ts', 'LOG ANY EVENT WITH USERS', eventData);
  }
}
