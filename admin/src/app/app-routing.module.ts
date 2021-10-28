import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParksComponent } from './parks/parks.component';

const routes: Routes = [{path: 'parks', component: ParksComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
