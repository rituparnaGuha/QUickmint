import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { data } from 'jquery';
import { PopupDetailsComponent } from '../popup-details/popup-details.component';
import { ServiceDetailsComponent } from '../service-details/service-details.component';
import { WebserviceService } from '../services/webservice.service';

@Component({
  selector: 'app-service-provider-list',
  templateUrl: 'service-provider-list.component.html',
  styleUrls: ['service-provider-list.component.css'],
})
export class ServiceProviderListComponent implements OnInit {
  @Input() provList: any;

  providersList: any;
  data: any;
  url: string = '';
  baseUrl: any;
  type: any;
  id:any;
  filteredData:any;
  category:any;
  photoUrl:string = 'https://nodeserver.mydevfactory.com:4290/';

  constructor(
    private route: ActivatedRoute,
    public service: WebserviceService,
    public router: Router,
    public dialog: MatDialog
  ) {
  //  console.log(this.router.getCurrentNavigation());
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.data = this.router.getCurrentNavigation()!.extras.state!.data;
        console.log('this.data: ', this.data);
        this.type = this.router.getCurrentNavigation()!.extras.state!.type;
        this.id = router.getCurrentNavigation()!.extras.state!.id;
      }
    });
  }

  ngOnInit(): void {
    //console.log('this.type: ', this.type);

    // if (this.type === 'none') {
    //   console.log('category service prov');
    // } else if (this.type === 'level 0') {
    //   console.log('subcategory service prov level 0');
    //   this.getProviders(this.data);
    // } else if (this.type === 'level 1') {
    //   console.log('subcategory service prov level 1 ');
    //   this.service
    //     .getTrainingProviders(this.data._id)
    //     .subscribe((resp: any) => {
    //       console.log(resp);
    //       this.providersList = resp.data.providerList;
    //     });
    // } else if (this.type === 'level 2') {
    //   console.log('subcategory service prov level 2 ');
    //   this.service.SubjectProviders(this.data._id).subscribe((resp: any) => {
    //     console.log(resp);
    //     this.providersList = resp.data.providerList;
    //   });
    // } else {
    //   console.log('ye mai kaha aa gaya');
  this.serviceList();
  }

  gotoDetails(){
    this.router.navigate(['/view-details'])
  }

   serviceList(){
    if(this.data[0])
   {
    let serviceData = {
      allcategory:this.data[0]._id,
      higherPrice: 10
    }
    this.service.allcategory = this.data[0]._id
    console.log('data1',serviceData)
    this.service.getServiceList(serviceData).subscribe((data: any) => {
     //this.providersList = data.data;
     
     this.service.FilteredData = data.data;
     console.log('initial provider list ', data.data);
   });
   }
   else {
  let serviceData = {
    allcategory:this.data._id,
    higherPrice: 10
  }
  this.service.allcategory = this.data._id;
  console.log('data1',serviceData)
  this.service.getServiceList(serviceData).subscribe((data: any) => {
   //this.providersList = data.data;
   
   this.service.FilteredData = data.data;
   console.log('initial provider list ', data.data);
  });
  }
}

  
  checkValue(){
    let newValue = this.service.FilteredData;
    let temp = newValue;
    newValue = this.filteredData;
    this.filteredData = temp;
  }

  getProviders(data: any) {
   // let latlng = localStorage.getItem('userData')!;

    //let d = JSON.parse(latlng).UserLocation;
    //console.log('data: ', data);
    if(data[0]){
      if(data[0].subTwo_category_id){
        //this.service.allcategory = data[0].subTwo_category_id;
        this.category = data[0].subTwo_category_id;
      }
      else if(data[0].subOne_category_id){
        //this.service.allcategory = data[0].subOne_category_id;
        this.category = data[0].subOne_category_id;
      }
      else if(data[0].sub_category_id){
        //this.service.allcategory = data[0].sub_category_id;
        this.category = data[0].sub_category_id;
      }else if(data[0].category_id){
       // this.service.allcategory = data[0].category_id;
        this.category = data[0].category_id;
      }
    }
      if(data){
        if(data.subTwo_category_id){
          //this.service.allcategory = data.subTwo_category_id;
          this.category = data.subTwo_category_id;
        }
        else if(data.subOne_category_id){
         // this.service.allcategory = data.subOne_category_id;
          this.category = data.subOne_category_id;
        }
        else if(data.sub_category_id){
          //this.service.allcategory = data.sub_category_id;
          this.category = data.sub_category_id;
        }else if(data.category_id){
          //this.service.allcategory = data.category_id;
          //this.service.allcategory = data.category_id;
        }
      }
    
    // console.log(latlng)
    // console.log(d)
    if(data[0]){
      let queryParams1 = {
        //category_id: this.category,
        //sub_category_id: data[0]._id,
       // Latitude: d.Latitude,
       // Longitude: d.Longitude,
       allcategory:this.category._id,
        lowerPrice: data[0].lowerPrice,
        minAge: data[0].minAge,
        maxAge: data[0].maxAge,
      };
      console.log('queryparam1',queryParams1);
      this.service.getServiceList(queryParams1).subscribe((data: any) => {
        this.providersList = data.data;
        //console.log('providersList: ', data.data);
      });
    }
    if(data.category_id){
      let queryParams2 = {
        //category_id: this.category,
        //sub_category_id: data._id,
       // Latitude: d.Latitude,
       // Longitude: d.Longitude,
       allcategory:this.category,
        lowerPrice: data.lowerPrice,
        minAge: data.minAge,
        maxAge: data.maxAge,
      };
      console.log('queryparam2',queryParams2);
      this.service.getServiceList(queryParams2).subscribe((data: any) => {
        this.providersList = data.data;
       // console.log('providersList: ', data.data);
      });
    }
  else{
console.log('no category id')
  }
  }

 

  goToPostANeed(d: any) {
    let nav: NavigationExtras = {
      state: {
        ...this.data,
        ...d,
        subcat_id: this.data._id,
        provider_id: d._id,
      },
    };
    this.router.navigate(['post-a-need'], nav);
  }

  showEducationProviders() {
    throw new Error('Method not implemented.');
  }

  getDetails(data: any): void {
    const dialogRef = this.dialog.open(ServiceDetailsComponent, {
      // width: '250px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  onValueChanged(ev: any) {
    console.log('from prov list: ', ev);
    this.data.lowerPrice = ev.price;
    this.data.minAge = ev.minAge;
    this.data.maxAge = ev.maxAge;
    console.log('data: ', this.data);

    this.getProviders(this.data);
  }
}
