import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpBackService } from '../services/http-back.service';

@Component({
  selector: 'app-create-park',
  templateUrl: './create-park.component.html',
  styleUrls: ['./create-park.component.css'],
})
export class CreateParkComponent implements OnInit {
  name: string = '';
  description: string = '';
  capacity: number;

  constructor(private httpBack: HttpBackService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.httpBack.createPark(this.name, this.capacity, this.description).subscribe((park) => {
      this.router.navigateByUrl('/parks');
    });
  }
}
