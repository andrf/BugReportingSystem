import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {BugReportSystemService} from './bug-report-system.service';
import {Bug} from './bug';


@Injectable({
  providedIn: 'root'
})
export class BugResolver implements Resolve<Bug> {

  constructor(private bugService: BugReportSystemService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bug> {
    if (route.params["id"] !== undefined) {
      return this.bugService.getById(route.params["id"]);
    }
    return null;
  }

}
