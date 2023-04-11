import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class MailSenderListener {
  @OnEvent('user.registration')
  handleOrderCreatedEvent(event) {
    console.log('👂 mail-sender.listener', 'SEND WELCOME EMAIL', event);
  }
}
