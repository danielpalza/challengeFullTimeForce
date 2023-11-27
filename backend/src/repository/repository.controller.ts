import { Controller } from '@nestjs/common';
import { RepositoryService } from './repository.service';

@Controller('/app/repository')
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) {}
}
