import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButterchickenComponent } from './butterchicken/butterchicken.component';
import { ChickenmasalaComponent } from './chickenmasala/chickenmasala.component';
import { ChickenkormaComponent } from './chickenkorma/chickenkorma.component';




@NgModule({
  declarations: [
    ButterchickenComponent,
    ChickenmasalaComponent,
    ChickenkormaComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButterchickenComponent
  ],
})
export class ChickenitemModule { }
