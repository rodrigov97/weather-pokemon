import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-screen',
  templateUrl: './error-screen.component.html',
  styleUrls: ['./error-screen.component.scss']
})
export class ErrorScreenComponent implements OnInit {

  @Input() type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
