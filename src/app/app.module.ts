import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChickenitemModule } from './indianrecipe/chickenitem/chickenitem.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ChickenitemModule // i import the chickenitem module inside the app module and inside the chickeitem module i declare the butterchicken compoenent therefore i dont need to declare component inside the app module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
