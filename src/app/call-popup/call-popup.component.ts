import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { JitsiComponent } from '../jitsi/jitsi.component';

@Component({
  selector: 'app-call-popup',
  templateUrl: './call-popup.component.html',
  styleUrls: ['./call-popup.component.css'],
})
export class CallPopupComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CallPopupComponent>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(JitsiComponent, {
      // width: '250px',
      data: { ...this.data },
    });
  }
}
