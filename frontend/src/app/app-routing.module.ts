import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitTableComponent } from './components/commit-table/commit-table.component';

const routes: Routes = [
  {
    path: 'commits',
    component: CommitTableComponent,
  },
  {
    path: '**',
    redirectTo: '/commits'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
