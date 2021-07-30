import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RateProviderComponent } from '../rate-provider/rate-provider.component';

import {ActivatedRoute , Router,NavigationExtras } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { WebserviceService } from 'src/app/services/webservice.service';
import { CommonService } from 'src/app/common.service';
import { AppRoutingModule } from '../app-routing.module';
import { ViewImageComponent } from '../view-Image/view-Image.component';
import { ViewClassComponent } from '../view-Class/view-Class.component';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  photoUrl:string = 'https://nodeserver.mydevfactory.com:4290/';
  ProviderId:string;
  providerData:any;
  providerGallery:any;
  following:boolean = true;
  liking:boolean = true;
  like1:any;
  follow1:any;
  averageRating:number;
  page:string;
  otherClass:any;

  constructor(
    public dialog: MatDialog,
    public service: WebserviceService,
    public router: Router,
    private route: ActivatedRoute,
    public commonService: CommonService,
    private toastr : ToastrService
  ) { 
    this.route.queryParams.subscribe((params) => { 
        this.ProviderId= this.router.getCurrentNavigation()!.extras.state!.data;
        console.log('this.providerId: ', this.ProviderId);
    });
  }

  ngOnInit(): void {
   // this.ProviderId='60914600c1bef37b92308879';
    this.service.provider_Id = this.ProviderId;
    
    this.viewDetails();
    this.checkFollowing();
    this.checkLiking();
  }

  checkFollowing(){
    this.service.checkFollowing(this.ProviderId).subscribe((data:any)=>{
      console.log('check follow data',data);
      if(data.data.follow == true){
        this.following = false;
      }
    })
  }

  checkLiking(){
    this.service.checkLiking(this.ProviderId).subscribe((data:any)=>{
      console.log('check like data',data);
      if(data.data.like==true){
        this.liking = false;
      }
    })
  }

  viewDetails(){
    this.service.viewDetails(this.ProviderId).subscribe((data:any)=>{
      console.log('details data', data);
      this.providerData = data;
      this.providerGallery = data.providerdetails.gallery;
      this.like1= this.providerData.like;
      this.follow1 = this.providerData.follow;
      this.averageRating = this.providerData.providerdetails.averageRating;
      this.service.galleryPhoto = this.providerGallery;
      this.page = this.providerData.providerdetails.credentials;
      this.otherClass = this.providerData.otheclass;
      this.service.serviceList = this.otherClass;
      console.log('average rating',this.averageRating);
    })
  }

  follow(){
    let data={
      provider_id : this.ProviderId,
      follow:'true'
    }
    this.following = false;
    this.service.follow(data).subscribe((data:any)=>{
      console.log('follow back data',data);
    })
    var that = this;
    setTimeout(function(){
      that.viewDetails();
    },500);
  }
  unfollow(){
    let data={
      provider_id : this.ProviderId,
      follow:'false'
    }
    this.following = true;
    this.service.follow(data).subscribe((data:any)=>{
      console.log('follow back data',data);
    })
    var that = this;
    setTimeout(function(){
      that.viewDetails();
    },500);
  }

  like(){
    let data={
      provider_id : this.ProviderId,
      like:'true'
      }
      this.liking=false;
    this.service.like(data).subscribe((data:any)=>{
      console.log('like list',data);
    })
    var that = this;
    setTimeout(function(){
      that.viewDetails();
    },500);
  }
  unlike(){
    let data={
      provider_id : this.ProviderId,
      like:'false'
      }
    this.liking=true;
    this.service.like(data).subscribe((data:any)=>{
      console.log('like list',data);
    })
    //this.checkLiking();
    var that = this;
    setTimeout(function(){
      that.viewDetails();
    },500);
  }

  RateService(data: any): void {
    const dialogRef = this.dialog.open(RateProviderComponent, {
      // width: '250px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ViewImage(): void {
    const dialogRef = this.dialog.open(ViewImageComponent, {
      // width: '250px',
      data: this.providerGallery,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ViewClasses(): void {
    const dialogRef = this.dialog.open(ViewClassComponent, {
      // width: '250px',
      data: this.otherClass
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

}
