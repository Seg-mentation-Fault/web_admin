import { Component, OnInit, Inject } from '@angular/core';
import { CapacityDay } from '../interfaces/capacityDay';
import { HttpBackService } from '../services/http-back.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-capacity-park',
  templateUrl: './capacity-park.component.html',
  styleUrls: ['./capacity-park.component.css'],
})
export class CapacityParkComponent implements OnInit {
  newCapacity: number;

  isEmpty: boolean = false;
  id: string | null;
  isLoading: boolean = true;
  capacityDays: CapacityDay[];
  park: any;

  constructor(
    private httpBack: HttpBackService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

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
        this.capacityDays = capacityDays;
        this.isLoading = false;
      }, 500);
    });
  }

  openDialog(newCapacityDay: CapacityDay): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { capacity: this.newCapacity },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(result, newCapacityDay);
      this.httpBack
        .updateCapacityPark(newCapacityDay.ParkId, newCapacityDay.date, result)
        .subscribe((result) => {
          window.location.reload();
          console.log(result);
        });
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './modal-park-capacity-update.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { capacity: number }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
