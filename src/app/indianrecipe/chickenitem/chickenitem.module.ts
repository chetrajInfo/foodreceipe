import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButterchickenComponent } from './butterchicken/butterchicken.component';



@NgModule({
  declarations: [
    ButterchickenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButterchickenComponent
  ],
})
export class ChickenitemModule { }
