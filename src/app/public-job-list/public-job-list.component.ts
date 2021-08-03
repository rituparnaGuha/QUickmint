import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WebserviceService } from '../services/webservice.service';
import * as moment from 'moment';
import { JitsiComponent } from '../jitsi/jitsi.component';
import { MatDialog } from '@angular/material/dialog';
import { CallPopupComponent } from '../call-popup/call-popup.component';

@Component({
  selector: 'app-public-job-list',
  templateUrl: './public-job-list.component.html',
  styleUrls: ['./public-job-list.component.css'],
})
export class PublicJobListComponent implements OnInit {
  @Input() item = 'Kolkata';
  public userData: any;
  status: string = '';
  privateJobList: any = [];
  publicJobList: any = [];

  constructor(public service: WebserviceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData')!);

    this.getPublicJobs();
    this.getprivateJobsList();
  }

  getStatusText(job: number) {
    if (job === 1) {
      return 'Awaiting';
    } else if (job === 2) {
      return 'Accepted';
    } else if (job === 3) {
      return 'Declined';
    } else if (job === 4) {
      return 'Started';
    } else {
      return 'Completed';
    }
  }

  getPublicJobs() {
    this.service.publicJobList().subscribe((jobs: any) => {
      console.log('jobs recieved: ', jobs);
      this.publicJobList = jobs.data;
    });
  }

  setToDateStr(string: any) {
    return moment(string).format('DD MMM YYYY');
  }

  getprivateJobsList() {
    console.log('getPrivateJobList');

    this.service.getPrivateJobList().subscribe((data: any) => {
      this.privateJobList = data.data;

      console.log('getPrivateJobList', data);
    });
  }

  openDialog(job: any): void {
    const dialogRef = this.dialog.open(CallPopupComponent, {
      // width: '250px',
      data: {
        provider: job.provider_id,
        user: this.userData,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
