import { Component, OnInit } from '@angular/core';
import { Bug } from '../bug';
import { BugReportSystemService } from '../bug-report-system.service';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {
  bugs: Bug[] = [];

  constructor(private bugReportSystemService: BugReportSystemService) { }

  ngOnInit(): void {
    this.bugs = this.getBugs();
  }

  getBugs(): Bug[] {
    // TODO:  Get bugs from bugReportSystemService
    return [{
      title: 'another bug',
      priority: 1,
      reporter: 'QA',
      dateCreated: '2020-09-21T13:35:08.190Z',
      status: 'Open'
    }, {
      title: 'bugota',
      priority: 1,
      reporter: 'QA',
      dateCreated: '2020-09-21T13:23:14.060Z',
      status: 'Done'
    }];
  }

}
