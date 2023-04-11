import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { DummyDb } from '../common/services/dummy-db.service';
import { MailSenderListener } from './listeners/mail-sender.listener';
import { LoggerListener } from './listeners/logger.listener';

@Module({
  imports: [],
  controllers: [RegistrationController],
  providers: [DummyDb, RegistrationService, MailSenderListener, LoggerListener],
})
export class EventsDemoModule {}
