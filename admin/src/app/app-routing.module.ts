import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParksComponent } from './parks/parks.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: '', redirectTo: '/parks', pathMatch: 'full' },
  { path: 'parks', component: ParksComponent },
  { path: 'reservations', component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
