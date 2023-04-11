import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class LoginDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly password: string;
}
