import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParksComponent } from './parks/parks.component';
import { CreateParkComponent } from './create-park/create-park.component';
import { CapacityParkComponent } from './capacity-park/capacity-park.component';
import { CreateCapacityDayComponent } from './create-capacity-day/create-capacity-day.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { EditParkComponent } from './edit-park/edit-park.component';

const routes: Routes = [
  { path: '', redirectTo: '/parks', pathMatch: 'full' },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'parks', component: ParksComponent },
  { path: 'create-parks', component: CreateParkComponent },
  { path: 'edit-parks/:id', component: EditParkComponent },
  { path: 'capacity-park/:id', component: CapacityParkComponent },
  { path: 'capacity-park/:id/create', component: CreateCapacityDayComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
