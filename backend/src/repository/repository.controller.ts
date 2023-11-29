import { Controller, Get, Query } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { BranchesResponse } from './dto/branches.dto';
import { CommitsResponse } from './dto/commits.dto';
import { AppService } from '../app.service';
@Controller('repository')
export class RepositoryController {
  constructor(
    private readonly repositoryService: RepositoryService,
    private readonly appService: AppService,
  ) {}

  @Get('/getCommits')
  async getRepository(
    @Query('branch') branch: string,
  ): Promise<CommitsResponse> {
    if (!branch) {
      throw new Error('Branch is required');
    }
    let { data } = await this.repositoryService.getRepository(branch);
    return {
      commits: data.map((commit) => {
        return {
          author: commit.commit.author?.name as string,
          message: commit.commit.message,
          avatar: commit.author?.avatar_url as string,
          date: this.appService.getRelativeTime(commit.commit.author?.date as string) ,
        };
      }),
      branch: branch,
    };
  }

  @Get('/getBranches')
  async getBranches(): Promise<BranchesResponse> {
    let { data } = await this.repositoryService.getBranches();

    return {
      branches: data.map((branch) => {
        return branch.name;
      }),
    };
  }
}
