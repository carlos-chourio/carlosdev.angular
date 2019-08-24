import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  search() : void {
    console.log("search");
  }

  constructor() { }

  ngOnInit() {
  }

}
