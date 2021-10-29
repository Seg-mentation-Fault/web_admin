import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParksComponent } from './parks/parks.component';
import { LayoutComponent } from './layout/layout.component';

import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [AppComponent, ParksComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule, SidebarModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
