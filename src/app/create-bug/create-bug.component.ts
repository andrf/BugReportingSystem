import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {BugReportSystemService} from '../bug-report-system.service';
import {Bug} from '../bug';
import {Comment} from "../comment";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.scss']
})
export class CreateBugComponent implements OnInit {
  bug = {} as Bug;
  public bugId: null;
  public bugForm: FormGroup;
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
    this.bugForm = new FormGroup({
      title: new FormControl(this.bug.title, Validators.required),
      priority: new FormControl(this.bug.priority, Validators.required),
      reporter: new FormControl(this.bug.reporter, Validators.required),
      status: new FormControl(this.bug.status, Validators.required),
      description: new FormControl(this.bug.description, Validators.required),
      comments: new FormArray([])
    });
    this.initComments(this.bug.comments)
  }

  get comments() {
    return this.bugForm.get('comments') as FormArray;
  }

  initComments(comments) {
    comments.forEach(comment => {
      this.addComment(comment);
    });
  }

  public submitBug(): void {
    this.bug.title = this.bugForm.get('title').value;
    this.bug.priority = this.bugForm.get('priority').value;
    this.bug.reporter = this.bugForm.get('reporter').value;
    this.bug.status = this.bugForm.get('status').value;
    this.bug.description = this.bugForm.get('description').value;
    this.bug.comments =  this.comments.value;

    (this.onCreateStatus) ? this.createBug() : this.editBug();
}

  reloadForm(): void {
    this.bug = this.activatedRoute.snapshot.data.bug;
    this.bugForm.patchValue({
      title: this.bug.title,
      priority: this.bug.priority,
      reporter: this.bug.reporter,
      status: this.bug.status,
      description: this.bug.description
    });
  }

  createBug(): void {
    this.bugService.postBugs(this.bug).subscribe(
      () => {
        console.log('Bug created successfully');
        this.router.navigate(['/']);
      },
      error => {
        console.log('Error creating bug', error);
      }
    );
  }

  editBug(): void {
    this.bugService.putBugs(this.bug).subscribe(
      () => {
        console.log('Bug created successfully');
        this.router.navigate(['/']);
      },
      error => {
        console.log('Error creating bug', error);
      }
    );
  }

  removeComment(index: number): void {
    this.comments.removeAt(index);
  }

  addComment(comment?: Comment): void {
    this.comments.push(new FormGroup({
      _id: new FormControl(comment?._id),
      reporter: new FormControl(comment?.reporter),
      description: new FormControl(comment?.description),
    }));
  }

}
