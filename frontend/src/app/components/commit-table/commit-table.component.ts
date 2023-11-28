import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commit-table',
  templateUrl: './commit-table.component.html',
  styleUrls: ['./commit-table.component.css']
})
export class CommitTableComponent implements OnInit {
  commits: any[] = [ ];
  constructor() { }

  ngOnInit(): void {
  }

}
