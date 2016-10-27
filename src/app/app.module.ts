import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VillageComponent } from './village/village.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { ItemComponent } from './village/item/item.component';
import { MylogDirective } from './mylog.directive';
import { MypipePipe } from './mypipe.pipe';
import { ItemsFilterPipe } from './village/items-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VillageComponent,
    TeddyBearComponent,
    TemperaturComponent,
    ItemComponent,
    MylogDirective,
    MypipePipe,
    ItemsFilterPipe,
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
