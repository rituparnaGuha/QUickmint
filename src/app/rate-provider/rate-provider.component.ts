import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WebserviceService } from '../services/webservice.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-rate-provider',
  templateUrl: './rate-provider.component.html',
  styleUrls: ['./rate-provider.component.css']
})
export class RateProviderComponent implements OnInit {

  rating:any;
  review:any;

  constructor(
    public dialog: MatDialog,
    public service:WebserviceService,
    public toast:ToastrService,
    public dialogRef: MatDialogRef<RateProviderComponent>
  //  public dialogRef: MatDialogRef<RateProviderComponent>,
  //  @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log('data in rate');
  }

  provideFeedback(){
    let data={
      rating:this.rating,
      review:this.review,
      reviewTo:this.service.provider_Id
    }
    console.log('feedback data',data);
    this.service.provideFeedback(data).subscribe((resp:any)=>{
      console.log('resp',resp);
      if(resp.success == false){
        this.toast.warning(resp.message);
      }
      else{
        this.toast.success(resp.message);
      }
    })
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}
