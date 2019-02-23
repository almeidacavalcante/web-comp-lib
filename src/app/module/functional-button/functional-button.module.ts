import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionalButtonComponent } from './functional-button.component';

@NgModule({
  declarations: [FunctionalButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FunctionalButtonComponent
  ]
})
export class FunctionalButtonModule { }
