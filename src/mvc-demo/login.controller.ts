import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';

@Controller('/mvc-demo')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  async loginPage(): Promise<string> {
    return `
      <h1>MCV</h1>
      <p>How to use a template engine: <a href='https://docs.nestjs.com/techniques/mvc'>here</a></p> 
      
      <h2>Login Form</h2>
      <form action='/mvc-demo' method='post'>
        <label>Email: <input type='email' name='email' /></label>
        <br/>
        <label>Password: <input type='password' name='password' /></label>
        <br/>
        <button type='submit'>Submit</button>
        <br/>
      </form>
    `;
  }

  @Post()
  async showUserInfo(
    @Body() { email, password }: LoginDto,
  ): ReturnType<LoginService['getUser']> {
    try {
      return await this.loginService.getUser(email, password);
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: e.message,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: e,
        },
      );
    }
  }
}
