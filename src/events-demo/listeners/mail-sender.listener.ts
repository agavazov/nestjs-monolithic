import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class MailSenderListener {
  @OnEvent('user.registration')
  async handleRegistration(eventData) {
    console.log('👂 mail-sender.listener', 'SEND WELCOME EMAIL', eventData);
  }
}
