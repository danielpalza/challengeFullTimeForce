import { Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { RepositoryController } from './repository.controller';
import { AppService } from '../app.service';

@Module({
  controllers: [RepositoryController],
  providers: [RepositoryService, AppService]
})
export class RepositoryModule {}
