import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../service/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moveTo(elementId:string): void {
    this.scrollService.scrollToElementId(elementId);
  }

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
  }

}
