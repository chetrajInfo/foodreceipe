import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButterchickenComponent } from './butterchicken/butterchicken.component';
import { ChickenmasalaComponent } from './chickenmasala/chickenmasala.component';
import { MainpageComponent } from './mainpage/mainpage.component';



@NgModule({
  declarations: [
    ButterchickenComponent,
    ChickenmasalaComponent,
    MainpageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButterchickenComponent
  ],
})
export class ChickenitemModule { }
