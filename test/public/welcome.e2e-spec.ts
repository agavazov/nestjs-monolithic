import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('Public / Welcome (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Must contains "Hello World"', async () => {
    const res = await request(app.getHttpServer()).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hello World!');
  });
});
