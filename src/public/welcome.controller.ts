import { Controller, Get } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/interfaces/access.interface';

@Controller()
export class WelcomeController {
  @Roles(Role.unprotected)
  @Get()
  async findAll(): Promise<string> {
    return `
      <h1>Hello World!</h1>
      <ul>
        <li><a href="/cats">/cats</a></li>
        <li><a href="/healthcheck">/healthcheck</a></li>
        <li><a href="/preferences">/preferences</a></li>
        <li><a href="/store/books">/store/books</a></li>
        <li><a href="/mvc-demo">/mvc-demo</a></li>
        <li><a href="/events-demo/registration">/events-demo/registration</a></li>
      </ul>
    `;
  }
}
