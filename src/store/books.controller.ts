import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { AuthenticatedGuard } from '../common/guards/authenticated.guard';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/interfaces/access.interface';

@UseGuards(AuthenticatedGuard)
@Controller('/store/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Roles(Role.admin, Role.seller)
  @Get()
  async findAll(): ReturnType<BooksService['findAll']> {
    return await this.booksService.findAll();
  }

  @Roles(Role.admin, Role.seller, Role.buyer)
  @Get(':id')
  async get(@Param('id') id: string): ReturnType<BooksService['get']> {
    return await this.booksService.get(id);
  }

  @Roles(Role.admin, Role.seller)
  @Post()
  async create(
    @Body() data: CreateBookDto,
  ): ReturnType<BooksService['create']> {
    return await this.booksService.create(data);
  }

  @Roles(Role.admin, Role.seller)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateBookDto,
  ): ReturnType<BooksService['update']> {
    return await this.booksService.update(id, data);
  }

  @Roles(Role.admin, Role.seller)
  @Delete(':id')
  async delete(@Param('id') id: string): ReturnType<BooksService['delete']> {
    return await this.booksService.delete(id);
  }
}
