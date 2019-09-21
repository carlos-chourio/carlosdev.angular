import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncDescriptionPipe } from './trunc-description.pipe';


@NgModule({
  declarations: [
    TruncDescriptionPipe
  ],
  imports: [],
  exports: [
    TruncDescriptionPipe,
    CommonModule
  ]
})
export class CommonUtilitiesModule { }
