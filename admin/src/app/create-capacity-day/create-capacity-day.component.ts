import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpBackService } from '../services/http-back.service';
import * as moment from 'moment';

@Component({
  selector: 'app-create-capacity-day',
  templateUrl: './create-capacity-day.component.html',
  styleUrls: ['./create-capacity-day.component.css'],
})
export class CreateCapacityDayComponent implements OnInit {
  date: string = '';
  id: string | null;
  capacityDay: number;

  constructor(
    private httpBack: HttpBackService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onSubmit() {
    const dateSend = moment(this.date).format('YYYY-MM-DD');
    this.httpBack.createCapacityDay(this.id, dateSend, this.capacityDay).subscribe(() => {
      this.router.navigateByUrl(`/capacity-park/${this.id}`);
    });
  }
}
