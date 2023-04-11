import { Controller, Get, Query } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/events-demo/registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Get()
  async create(
    @Query() data: CreateUserDto,
  ): ReturnType<RegistrationService['create']> {
    return await this.registrationService.create(data);
  }
}
