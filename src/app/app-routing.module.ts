import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingloginComponent } from './parkinglogin/parkinglogin.component';
import { CarloginComponent } from './carlogin/carlogin.component';
import { ParkingviewComponent } from './parkingview/parkingview.component';
import { CarviewComponent } from './carview/carview.component';

const routes: Routes = [{path: 'car-login', component: CarloginComponent},
{path: 'parking-login', component: ParkingloginComponent},
{path: 'car-view', component: CarviewComponent},
{path: 'parking-view', component: ParkingviewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
