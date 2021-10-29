import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParksComponent } from './parks/parks.component';

const routes: Routes = [
  { path: '', redirectTo: '/parks', pathMatch: 'full' },
  { path: 'parks', component: ParksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
