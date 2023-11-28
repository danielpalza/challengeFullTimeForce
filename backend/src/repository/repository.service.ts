import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Octokit } from 'octokit';

@Injectable()
export class RepositoryService {
  constructor(private readonly configService: ConfigService) {}
  key = this.configService.get('GITHUB_KEY');
  user = this.configService.get('GITHUB_USER');
  repoName= this.configService.get('GITHUB_REPO_NAME');

  octokit = new Octokit({
    auth: this.key,
  });
  async getRepository(branch:string) {
    
    return await this.octokit.request('GET /repos/{owner}/{repo}/commits', {
      owner: this.user,
      repo: this.repoName,
      sha: branch,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
     
  }

  async getBranches() {
    return await this.octokit.request('GET /repos/{owner}/{repo}/branches', {
      owner: this.user,
      repo: this.repoName,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  }
}
