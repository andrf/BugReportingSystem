import {Component, OnInit} from '@angular/core';
import {BugReportSystemService} from '../bug-report-system.service';
import {Bug} from '../bug';
import {Router} from '@angular/router';
import {timer} from 'rxjs';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {
  bugs: Bug[] = null;
  sorting = {
    column: '',
    isAsc: true
  };

  constructor(private bugService: BugReportSystemService, private router: Router) { }

  ngOnInit(): void {
    this.getBugs();
  }

  getBugs(): void {
    timer(1000).subscribe(x => {
      this.bugService.getBugs().subscribe(bugList => this.bugs = bugList);
    });

  }

  sort(column: string): void {
    if (this.sorting.column === column) {
      this.sorting.isAsc = !this.sorting.isAsc;
    } else {
      this.sorting = {
        column,
        isAsc: true
      };
    }

    this.sorting.isAsc ? this.sortAsc(column) : this.sortDesc(column);
  }

  sortAsc(column: string): void {
    this.bugs.sort((a, b) => {
      const sortA = (column === 'priority') ? a[column] : a[column].toUpperCase();
      const sortB = (column === 'priority') ? b[column] : b[column].toUpperCase();
      if (sortA < sortB) {
        return -1;
      }

      if (sortA > sortB) {
        return 1;
      }

      return 0;
    });
  }

  sortDesc(column: string): void {
    this.bugs.sort((a, b) => {
      const sortA = (column === 'priority') ? a[column] : a[column].toUpperCase();
      const sortB = (column === 'priority') ? b[column] : b[column].toUpperCase();
      if (sortA > sortB) {
        return -1;
      }

      if (sortA < sortB) {
        return 1;
      }

      return 0;
    });
  }

  createNewBug(): void {
    this.router.navigate(['/bug']);
  }

  bugListExist(): boolean {
    return this.bugs !== null;
  }

  EditBug(bugId: string): void {
    this.router.navigate(['/bug', bugId]);
  }
}
