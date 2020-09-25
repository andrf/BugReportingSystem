import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bug} from './bug';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugReportSystemService {
  private readonly url: string = 'https://bug-report-system-server.herokuapp.com/bugs';

  constructor(private http: HttpClient) {
  }

  getBugs(): Observable<Bug[]> {
    return this.http.get<Bug[]>(`${this.url}?size=1000`);
  }

  getById(bugId: string): Observable<Bug> {
    return this.http.get<Bug>(`${this.url}/${bugId}`);
  }

  postBugs(bug: Bug): Observable<any> {
    return this.http.post<Bug>(this.url, bug);
  }

  putBugs(bug: Bug): Observable<any> {
    return this.http.put<Bug>(`${this.url}/${bug.id}`, bug);
  }
}
