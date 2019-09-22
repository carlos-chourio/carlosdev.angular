import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  @Input() showIcon: boolean;

  hamburgerClicked(): void {
    
  }
  
  constructor() { 
    this.showIcon = false;
  }

  ngOnInit() {
  }

}
