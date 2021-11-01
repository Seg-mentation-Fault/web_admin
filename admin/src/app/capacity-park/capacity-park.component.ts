import { Component, OnInit } from '@angular/core';
import { CapacityDay } from '../interfaces/capacityDay';
import { HttpBackService } from '../services/http-back.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-capacity-park',
  templateUrl: './capacity-park.component.html',
  styleUrls: ['./capacity-park.component.css'],
})
export class CapacityParkComponent implements OnInit {
  isEmpty: boolean = false;
  id: string | null;
  isLoading: boolean = true;
  capacityDays: CapacityDay[];
  park: any;

  constructor(private httpBack: HttpBackService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.httpBack.getParks().subscribe((parks) => {
      for (let count of parks) {
        if (String(count.id) === this.id) {
          this.park = count;
        }
      }
    });
    this.httpBack.getCapacityDayPark(this.id).subscribe((capacityDays) => {
      setTimeout(() => {
        if (capacityDays.length === 0) {
          this.isEmpty = true;
        }
        // this.parkName = capacityDays[0].name;
        this.capacityDays = capacityDays;
        this.isLoading = false;
      }, 500);
    });
  }
}
