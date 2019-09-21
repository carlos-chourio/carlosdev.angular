import { Component, OnInit } from '@angular/core';
import { ScrollService, ScrollEventArgs } from '../service/scroll.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  isNavbarOpaque: boolean;

  hamburgerClicked(): void {
    
  }

  constructor(private scrollService: ScrollService) {
    scrollService.scrolledWindows.subscribe((scrollArgs: ScrollEventArgs) => 
      this.isNavbarOpaque = !scrollArgs.isTop);
    console.log(scrollService);
  }

  ngOnInit() {
  }

}
