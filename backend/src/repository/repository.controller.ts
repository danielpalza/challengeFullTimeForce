import { Controller, Get,Param,Post, Query } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { BranchesResponse } from './dto/branches.dto';
import { CommitsResponse } from './dto/commits.dto';
@Controller('repository')
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) {}

  @Get('/getCommits')
  async getRepository(@Query('branch') branch: string): Promise<CommitsResponse> {
    let {data}= await this.repositoryService.getRepository(branch);
  
    return {
      commits: data.map((commit) => {
        return {
          author: commit.commit.author?.name as string,
          message: commit.commit.message,
          avatar: commit.author?.avatar_url  as string
        }
      }),
      branch: branch
    }
  }

  @Get('/getBranches')
  async getBranches(): Promise<BranchesResponse> {
    let {data}= await this.repositoryService.getBranches();
    
    return {
      branches: data.map((branch) => {
        return {
          name: branch.name
        }
      })
    }
  }
}

