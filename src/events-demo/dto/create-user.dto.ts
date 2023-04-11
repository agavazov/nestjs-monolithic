import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
