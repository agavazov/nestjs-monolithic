import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { DummyDb } from '../common/services/dummy-db.service';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [DummyDb, LoginService],
})
export class MvcDemoModule {}
