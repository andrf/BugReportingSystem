import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BugReportSystemService} from '../bug-report-system.service';
import {Bug} from '../bug';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.scss']
})
export class CreateBugComponent implements OnInit {
  public newBugForm: FormGroup;

  constructor(private bugService: BugReportSystemService) {
  }

  ngOnInit(): void {
    this.initializeNewBugForm();
  }

  private initializeNewBugForm(): void {
    this.newBugForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      priority: new FormControl(null, Validators.required),
      reporter: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });
  }

  public createBug(): void {
    let bug = {} as Bug;

    bug.title = this.newBugForm.get('title').value;
    bug.priority = this.newBugForm.get('priority').value;
    bug.reporter = this.newBugForm.get('reporter').value;
    bug.status = this.newBugForm.get('status').value;
    bug.description = this.newBugForm.get('description').value;

    this.bugService.postBugs(bug).subscribe(results => bug = results);
    console.log(bug);

    this.newBugForm.reset();
  }
}
