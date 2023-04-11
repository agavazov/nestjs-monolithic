import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { DummyDb } from '../common/services/dummy-db.service';

@Injectable()
export class BooksService {
  constructor(private db: DummyDb) {}

  async findAll(): Promise<Book[]> {
    return this.db.findAll<Book>('books');
  }

  async get(id: string): Promise<Book> {
    return this.db.get<Book>('books', id);
  }

  async create(book: Book): Promise<{ id: string; book: Book }> {
    const recordId = await this.db.insert('books', book);

    // Return
    return {
      id: recordId,
      book,
    };
  }

  async update(id: string, book: Book): Promise<boolean> {
    return await this.db.update('books', id, book);
  }

  async delete(id: string): Promise<boolean> {
    return await this.db.delete('books', id);
  }
}
