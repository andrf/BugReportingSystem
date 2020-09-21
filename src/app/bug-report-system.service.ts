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
    return this.http.get<Bug[]>('https://bug-report-system-server.herokuapp.com/bugs');
  }
}
