import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caret',
  templateUrl: './caret.component.html',
  styleUrls: ['./caret.component.scss']
})
export class CaretComponent implements OnInit {
  @Input() isAsc: boolean;
  @Input() isSorted: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
