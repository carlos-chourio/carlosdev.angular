import { Component, OnInit, Output, EventEmitter, Input, HostBinding } from '@angular/core';
import { withLatestFrom } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.css']
})
export class HamburgerButtonComponent implements OnInit {

  @Output() clicked: EventEmitter<any> = new EventEmitter();
  @Input() height : number;
  @Input() width : number;
  _separation : number;
  _lineHeight : number;
  pixelsTranslated : number;


  @Input()
  public set lineHeight(value:number) {
    this._lineHeight = value;
    this.pixelsTranslated = this._separation + this.lineHeight;
  }

  public get lineHeight() : number {
    return this._lineHeight;
  }

  @HostBinding("attr.style")
  public get style() {
    return this.sanitizer.bypassSecurityTrustStyle(`--pixelsTranslated: ${this.pixelsTranslated}px`);
  }

  constructor(private sanitizer: DomSanitizer) { 
    this.height = 30;
    this.width = 80;
    this.lineHeight = 3;
  }

  ngOnInit() {
  }

  clickedClass="";
  
  clickHamburger() : void {
    this.pixelsTranslated = this.height/3 + this.lineHeight;
    if (this.clickedClass === "") {
      this.clickedClass="clicked";
      this.clicked.emit();
    } else {
      this.clickedClass="";
    }
  }
}
