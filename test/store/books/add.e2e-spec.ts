import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';

describe('Store / Books / Add (e2e)', () => {
  let app: INestApplication;
  let addedId: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Must successfully add a new book', async () => {
    const res = await request(app.getHttpServer())
      .post('/store/books')
      .set('Content-type', 'application/json')
      .send({
        name: 'How to do e2e',
        description: 'Quick examples of how to do a testing in NestJS',
        price: 123,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(typeof res.body?.id).toBe('string');

    addedId = res.body.id;
  });

  it('Must return the added record', async () => {
    const res = await request(app.getHttpServer()).get(
      `/store/books/${addedId}`,
    );

    expect(res.body?.id).toBe(addedId);
  });
});
