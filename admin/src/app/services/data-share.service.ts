import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Parks } from '../interfaces/park';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  private dataSource = new BehaviorSubject<Parks>({ name: 'None', capacity: 0 });
  currentData = this.dataSource.asObservable();

  constructor() {}

  changeData(data: Parks) {
    this.dataSource.next(data);
  }
}
