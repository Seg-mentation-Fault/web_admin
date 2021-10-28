import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParksComponent } from './parks/parks.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, ParksComponent, ReservationComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, SidebarModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
