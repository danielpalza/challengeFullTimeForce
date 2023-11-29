import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-commit-table',
  templateUrl: './commit-table.component.html',
  styleUrls: ['./commit-table.component.css'],
})
export class CommitTableComponent implements OnInit {
  commits: any = [];
  branches: string[] = [];
  branch: string = '';
  isOpen = false;
  loading = true;

  constructor(private repositoryService: RepositoryService) {
    this.repositoryService.getBranches().subscribe((data: any) => {
      this.branches = data.branches;
      if (this.branches.length > 0) {
        this.branch = this.branches[0];
        this.getCommits(this.branch);
      }
    });
  }

  ngOnInit(): void {}

  getCommits(branch: string) {
    this.loading = true;
    this.repositoryService.getCommits(branch).subscribe((data: any) => {
      this.commits = data.commits;
      this.branch = data.branch;
      this.loading = false;
    });
  }
  changeBranch(branch: string) {
    this.branch = branch;
    this.isOpen = false;
    // Aquí puedes añadir más lógica para cambiar la branch
    this.getCommits(branch);
  }
}
