import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  async getUser(
    email: string,
    password: string,
  ): Promise<{ fullName: string }> {
    // Dummy check
    if (!email) {
      throw new Error('Write some email please');
    }

    if (password !== '123456') {
      throw new Error('Please use password: 123456');
    }

    // Return
    return {
      fullName: 'Alexander Gavazov',
    };
  }
}
