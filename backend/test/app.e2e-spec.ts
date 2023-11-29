import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET array of branches', () => {
    return request(app.getHttpServer())
      .get('/repository/getBranches')
      .expect(200)
      .expect((res) => {  
        // Verifica que cada elemento del array 'branches' es un string
        res.body.branches.forEach((branch:string) => {
          expect(typeof branch).toBe('string');
        });
      });
  });

  it('/GET error commits without branch', () => {
    return request(app.getHttpServer())
      .get('/repository/getCommits')
      .expect(500)

  });

  it('/GET commits of branch', () => {
    return request(app.getHttpServer())
      .get('/repository/getCommits?branch=master')
      .expect(200)
      .expect((res) => {
    
        // Verifica que 'branch' es un string
        expect(typeof res.body.branch).toBe('string');
  
        // Verifica que 'commits' es un array
        expect(Array.isArray(res.body.commits)).toBe(true);
  
        // Verifica que cada commit tiene la estructura correcta
        res.body.commits.forEach((commit:any) => {
          expect(typeof commit.author).toBe('string');
          expect(typeof commit.message).toBe('string');
          expect(typeof commit.avatar).toBe('string');
          expect(typeof commit.date).toBe('string');
        });
      });
  });
 

  afterAll(async () => {
    await app.close();
  });
});
