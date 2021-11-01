import { Component, OnInit } from '@angular/core';
import { Parks } from '../interfaces/park';
import { DataShareService } from '../services/data-share.service';
import { HttpBackService } from '../services/http-back.service';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css'],
})
export class ParksComponent implements OnInit {
  parks: Parks[] = [];

  constructor(private httpback: HttpBackService, private dataShare: DataShareService) {}

  ngOnInit(): void {
    this.httpback.getParks().subscribe((parks) => (this.parks = parks));
  }

  sendEdit(data: Parks) {
    this.dataShare.changeData(data);
  }
}
