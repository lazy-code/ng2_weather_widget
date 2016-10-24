import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ElementLeftComponent } from './element-left/element-left.component';
import { ElementRightComponent } from './element-right/element-right.component';
import { TemperaturComponent } from './element-right/temperatur/temperatur.component';
import { TeddyBearComponent } from './element-right/teddy-bear/teddy-bear.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementLeftComponent,
    ElementRightComponent,
    TemperaturComponent,
    TeddyBearComponent,
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
