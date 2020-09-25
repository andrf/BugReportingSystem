import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bug} from './bug';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugReportSystemService {

  constructor(private http: HttpClient) {
  }

  getBugs(): Observable<Bug[]> {
    return this.http.get<Bug[]>('https://bug-report-system-server.herokuapp.com/bugs?size=1000');
  }

  getById(bugId: string): Observable<Bug> {
    return this.http.get<Bug>('https://bug-report-system-server.herokuapp.com/bugs/' + bugId);
  }

  postBugs(bug: Bug): Observable<any> {
    return this.http.post<Bug>('https://bug-report-system-server.herokuapp.com/bugs', bug);
  }

  putBugs(bug: Bug, bugId: string): Observable<any> {
    return this.http.put<Bug>('https://bug-report-system-server.herokuapp.com/bugs/' + bugId, bug);
  }
}
