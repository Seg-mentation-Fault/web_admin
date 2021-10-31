import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Parks } from '../interfaces/park';
import { CapacityDay } from '../interfaces/capacityDay';
import { Reservations } from '../interfaces/reservations';
import { ReservationSummary } from '../interfaces/parkDaySummary';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class HttpBackService {
  constructor(private http: HttpClient) {}

  getParks(): Observable<Parks[]> {
    return this.http.get<Parks[]>('http://3.93.222.241:3000/api/v1/parks');
  }

  createPark(name: string, capacity: number, description?: string): Observable<Parks> {
    return this.http.post<Parks>(
      'http://3.93.222.241:3000/api/v1/parks',
      {
        name,
        capacity,
        description,
      },
      httpOptions
    );
  }

  getCapacityDayPark(parkID: string | null): Observable<CapacityDay[]> {
    return this.http.post<CapacityDay[]>(
      'http://3.93.222.241:3000/api/v1/parkcapacity/byparkid',
      {
        ParkId: parkID,
      },
      httpOptions
    );
  }
  createCapacityDay(
    parkId: string | null,
    date: string,
    capacityDay: number
  ): Observable<CapacityDay> {
    return this.http.post<CapacityDay>(
      'http://3.93.222.241:3000/api/v1/parkcapacity',
      {
        ParkId: parkId,
        date,
        dayCapacity: capacityDay,
      },
      httpOptions
    );
  }

  getReservations(parkId: string | null, date: string): Observable<Reservations[]> {
    return this.http.post<Reservations[]>(
      'http://3.93.222.241:3000/api/v1/reservation/list',
      {
        ParkId: parkId,
        date,
      },
      httpOptions
    );
  }

  getSumamryParkReservation(parkId: string | null, date: string): Observable<ReservationSummary> {
    return this.http.post<ReservationSummary>(
      'http://3.93.222.241:3000/api/v1/reservation/summary',
      {
        ParkId: parkId,
        date,
      },
      httpOptions
    );
  }
}