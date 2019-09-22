import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncDescriptionPipe } from './pipes/trunc-description.pipe';
import { HamburgerButtonComponent } from './hamburger-button/hamburger-button.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    TruncDescriptionPipe,
    HamburgerButtonComponent,
    NavigationBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TruncDescriptionPipe,
    CommonModule,
    HamburgerButtonComponent,
    NavigationBarComponent
  ]
})
export class CommonUtilitiesModule { }
