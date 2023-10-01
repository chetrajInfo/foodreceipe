import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButterchickenComponent } from './butterchicken/butterchicken.component';
import { ChickenmasalaComponent } from './chickenmasala/chickenmasala.component';



@NgModule({
  declarations: [
    ButterchickenComponent,
    ChickenmasalaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButterchickenComponent
  ],
})
export class ChickenitemModule { }
