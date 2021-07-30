import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-class-details-popup',
  templateUrl: './class-details-popup.component.html',
  styleUrls: ['./class-details-popup.component.css'],
})
export class ClassDetailsPopupComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ClassDetailsPopupComponent>
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  getTime(time: any) {
    var stillUtc = moment.utc(time).toDate();
    var local = moment(stillUtc).local().format('YYYY-MM-DD, HH:mm:ss A');

    return local;
  }
}
