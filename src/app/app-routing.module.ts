import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ButterchickenComponent } from './indianrecipe/chickenitem/butterchicken/butterchicken.component';
import { ChickenitemModule } from './indianrecipe/chickenitem/chickenitem.module';
import { ChickenmasalaComponent } from './indianrecipe/chickenitem/chickenmasala/chickenmasala.component';
import { ChickenkormaComponent } from './indianrecipe/chickenitem/chickenkorma/chickenkorma.component';

const routes: Routes = [
{path:'', redirectTo:'/homepage', pathMatch:"full" },
{path:'homepage', component:MainpageComponent},
{path:'buttermasala', component:ButterchickenComponent},
{path:'chickenmasala', component:ChickenmasalaComponent},
{path:'chickenkorma', component:ChickenkormaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
