import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.css']
})
export class HamburgerButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickedClass="";
  
  clickHamburger() : void {
    console.log("hola");
    if (this.clickedClass === "") {
      this.clickedClass="clicked";
    } else {
      this.clickedClass="";
    }
  }
}
