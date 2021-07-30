import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-details',
  templateUrl: './popup-details.component.html',
  styleUrls: ['./popup-details.component.css']
})
export class PopupDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public provider: any,

  ) { }

  ngOnInit(): void {
    console.log("prov data: ", this.provider)

  }

}
