import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateBugComponent} from './create-bug.component';
import {CreateBugRoutingModule} from './create-bug-routing.module';



@NgModule({
  declarations: [CreateBugComponent],
  imports: [
    CommonModule,
    CreateBugRoutingModule

  ]
})
export class CreateBugModule { }
