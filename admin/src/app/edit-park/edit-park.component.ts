import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataShareService } from '../services/data-share.service';
import { HttpBackService } from '../services/http-back.service';

@Component({
  selector: 'app-edit-park',
  templateUrl: './edit-park.component.html',
  styleUrls: ['./edit-park.component.css'],
})
export class EditParkComponent implements OnInit {
  name: string = '';
  description: any = '';
  capacity: number;

  constructor(
    private httpBack: HttpBackService,
    private router: Router,
    private dataShare: DataShareService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataShare.currentData.subscribe((data) => {
      this.name = data.name;
      this.description = data.description;
      this.capacity = data.capacity;
    });
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.httpBack.updateParks(this.name, this.capacity, id, this.description).subscribe((park) => {
      this.router.navigateByUrl('/parks');
    });
  }
}
