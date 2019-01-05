import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages: string[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.messages.push('Error on Date of Birth');
    this.messages.push('Error on Date of Birth');
    this.messages.push('Error on Date of Birth');
    this.messages.push('Error on Date of Birth');
  }
}
