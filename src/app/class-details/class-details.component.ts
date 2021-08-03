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
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {
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
  classDetails:any={}
  constructor(
    public dialog: MatDialog,
    public service: WebserviceService,
    public router: Router,
    private route: ActivatedRoute,
    public commonService: CommonService,
    private toastr : ToastrService
  ) { 
    this.route.queryParams.subscribe((params) => { 
      this.classDetails= this.router.getCurrentNavigation()!.extras.state!.data;
      console.log('this.classDetails: ', this.classDetails);
  });
  }

  ngOnInit(): void {
  }

}
