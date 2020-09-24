import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateBugComponent} from './create-bug.component';
import {CreateBugRoutingModule} from './create-bug-routing.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [CreateBugComponent],
  imports: [
    CommonModule,
    CreateBugRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateBugModule { }
