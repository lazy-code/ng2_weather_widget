import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VillageComponent } from './village/village.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { TemperaturComponent } from './temperatur/temperatur.component';

@NgModule({
  declarations: [
    AppComponent,
    VillageComponent,
    TeddyBearComponent,
    TemperaturComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
