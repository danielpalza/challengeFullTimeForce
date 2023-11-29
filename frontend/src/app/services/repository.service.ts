import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  readonly URL_API = environment.apiUrl + '/repository';

  constructor( private http: HttpClient) { }

  getCommits(branch: string) {
    let params = new HttpParams().set('branch', branch);
    return this.http.get(this.URL_API + '/getCommits', {params});
  }

  getBranches() {
    return this.http.get(this.URL_API + '/getBranches');
  }
}
