import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpBackService } from '../http-back.service';
import { Parks } from '../interfaces/park';
import { Reservations } from '../interfaces/reservations';
import { ReservationSummary } from '../interfaces/parkDaySummary';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  parks: Parks[];
  park: string;
  date: string;
  reservations: Reservations[];
  summary: ReservationSummary = { capacityDay: 0, ConfirmGuest: 0, remainingCapacity: 0 };

  constructor(private httpBack: HttpBackService) {}

  ngOnInit(): void {
    this.httpBack.getParks().subscribe((parks) => (this.parks = parks));
  }
  onSubmit() {
    const dateSend = moment(this.date).format('YYYY-MM-DD');
    this.httpBack.getReservations(this.park, dateSend).subscribe((reservations) => {
      this.reservations = reservations;
    });
    this.httpBack.getSumamryParkReservation(this.park, dateSend).subscribe((summary) => {
      this.summary = summary;
    });
  }
}
