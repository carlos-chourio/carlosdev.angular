import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.css'],
})
export class HireMeComponent implements OnInit {
  email: string;
  name: string;
  title: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  onSendMessage(): void {
    console.log("Sending Message ...");
  }

}
