import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarloginComponent } from './carlogin/carlogin.component';
import { CarviewComponent } from './carview/carview.component';
import { ParkingviewComponent } from './parkingview/parkingview.component';
import { ParkingloginComponent } from './parkinglogin/parkinglogin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    CarloginComponent,
    CarviewComponent,
    ParkingviewComponent,
    ParkingloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
