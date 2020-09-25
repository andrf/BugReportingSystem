import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BugReportSystemService} from '../bug-report-system.service';
import {Bug} from '../bug';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.scss']
})
export class CreateBugComponent implements OnInit {
  bug = {} as Bug;
  public bugId: null;
  public BugForm: FormGroup;
  formTitle = 'Create a new';
  clearForm = 'Reset';
  onCreateStatus = true;

  constructor(private bugService: BugReportSystemService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.data.bug !== undefined) {
      this.bug = this.activatedRoute.snapshot.data.bug;
      this.formTitle = 'Edit ';
      this.clearForm = 'Cancel';
      this.onCreateStatus = false;
    }
    this.initializeBugForm();
  }

  private initializeBugForm(): void {
    this.BugForm = new FormGroup({
      title: new FormControl(this.bug.title, Validators.required),
      priority: new FormControl(this.bug.priority, Validators.required),
      reporter: new FormControl(this.bug.reporter, Validators.required),
      status: new FormControl(this.bug.status, Validators.required),
      description: new FormControl(this.bug.description, Validators.required)
    });
  }

  public submitBug(): void {

    this.bug.title = this.BugForm.get('title').value;
    this.bug.priority = this.BugForm.get('priority').value;
    this.bug.reporter = this.BugForm.get('reporter').value;
    this.bug.status = this.BugForm.get('status').value;
    this.bug.description = this.BugForm.get('description').value;

    // tslint:disable-next-line:max-line-length
    (this.onCreateStatus) ? this.bugService.postBugs(this.bug).subscribe(results => this.bug = results) : this.bugService.putBugs(this.bug, this.bug.id).subscribe(results => console.log(results));

    this.router.navigate(['/']);
  }

  reloadForm(): void {
    this.bug = this.activatedRoute.snapshot.data.bug;
    this.BugForm.patchValue({
      title: this.bug.title,
      priority: this.bug.priority,
      reporter: this.bug.reporter,
      status: this.bug.status,
      description: this.bug.description
  });
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
