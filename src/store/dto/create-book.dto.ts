import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBookDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Matches('^[A-Za-z][0-9]$') // Example for only latin and numbers
  readonly description: string;

  @IsNotEmpty()
  @IsDefined()
  @IsNumber()
  @Transform(({ value }) => Number(value)) // Example of transforming to a number
  readonly price: number | null;
}
