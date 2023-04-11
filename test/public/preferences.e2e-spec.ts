import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('Public / Preferences (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Must have set of properties', async () => {
    const res = await request(app.getHttpServer()).get('/preferences');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('serviceType');
    expect(res.body).toHaveProperty('inMaintenance');
    expect(res.body).toHaveProperty('maintenanceMessage');
  });
});
