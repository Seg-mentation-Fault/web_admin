import { Component, OnInit } from '@angular/core';
import { Parks } from '../interfaces/park';
import { HttpBackService } from '../http-back.service';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css'],
})
export class ParksComponent implements OnInit {
  parks: Parks[] = [];

  constructor(private httpback: HttpBackService) {}

  ngOnInit(): void {
    this.httpback.getParks().subscribe((parks) => (this.parks = parks));
  }
}
