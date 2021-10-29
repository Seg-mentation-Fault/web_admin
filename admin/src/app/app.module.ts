import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ParksComponent } from './parks/parks.component';
import { CreateParkComponent } from './create-park/create-park.component';
import { CapacityParkComponent } from './capacity-park/capacity-park.component';

@NgModule({
  declarations: [AppComponent, ParksComponent, LayoutComponent, CreateParkComponent, CapacityParkComponent],
  imports: [BrowserModule, AppRoutingModule, SidebarModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
