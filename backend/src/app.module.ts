import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [
    RepositoryModule,
    ConfigModule.forRoot({  isGlobal: true})],
  controllers: [],
  providers: [],
})
export class AppModule {}
