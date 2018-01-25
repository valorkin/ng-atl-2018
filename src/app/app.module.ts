import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent, TrRowComponent} from './app.component';


@NgModule({
  declarations: [
    TrRowComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
