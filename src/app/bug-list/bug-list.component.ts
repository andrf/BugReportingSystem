import { Component, OnInit } from '@angular/core';
import {BugReportSystemService} from "../bug-report-system.service";
import {Bug} from '../bug';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {
  bugs: Bug[] = [];

  constructor(private bugService: BugReportSystemService) { }

  ngOnInit(): void {
    this.bugs = this.getBugs();
  }

  getBugs(): Bug[] { 
    return this.bugService.getBugs().subscribe(bugList => this.bugs = bugList);
  }

}
