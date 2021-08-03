import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Output() onValueChanged = new EventEmitter();
  price: any = '';
  minAge: any = '';
  maxAge: any = '';
  filterQuery: any = {};
  higherPrice:number=0;
  lowerPrice:number=1;
  distancemax:number;
  distancemini:number;
  distance:any;
  ClassesFor:string = 'kids';
  Id = localStorage.getItem('userId');
  userType1 = localStorage.getItem('userType');

  categorylisting: any;
  categorySubcategory:any;
  subcategorylisting:any;
  level:any;
  open = false;
  userType: any;
  searchQuery: any = '';
  list: never[];
  pageCategory:any;

  constructor(private service: WebserviceService,
    private toastr: ToastrService,
    public router: Router,
    )  {}

  ngOnInit(): void {
    this.service.lowerPrice = this.lowerPrice;
    let data = {
      allcategory:this.service.allcategory,
      lowerPrice:this.lowerPrice
     }
     this.service.getServiceList(data).subscribe((data: any) => {
      //this.providersList = data.data;
      this.service.FilteredData = data.data;
      console.log('serviceList: in higher filter ', data.data);
      
    });
    //this.onItemChange1(1);

    this.service.categorylisting().subscribe(
      (data) => {
        console.log('category',data);
        this.categorylisting = (<any>data)['data'];
        // this.toastr.success((<any>data)["message"]);

        // this.router.navigate(['/login'])
      },
      (err) => {
        console.log(err);
      }
    );

    this.service.categorySubcategory().subscribe(
      (data) => {
        console.log('category subcategory',data);
        this.categorySubcategory = (<any>data)['data'];
        // this.toastr.success((<any>data)["message"]);

        // this.router.navigate(['/login'])
      },
      (err) => {
        console.log(err);
      }
    );
    
  }


  onItemChange1(value:any){
    this.service.lowerPrice = this.lowerPrice;
    console.log(" Value is : ", value );
    this.lowerPrice = value;
    this.higherPrice = 0;
    this.serviceList();
 }

 onItemChange2(value:any){
  this.service.higherPrice = this.higherPrice;
  console.log(" Value is : ", value );
  this.higherPrice = value;
  this.lowerPrice = 0;
  this.serviceList();
}

onDisChange(value:any){
if(this.service.Latitude == undefined)
{
  this.toastr.success('Please Select your Address in address search bar');
  this.distance=null;
}else{
this.distancemax = value;
 console.log(" Value is : ", value );
 this.serviceList();
 console.log('fil data in distance',this.service.FilteredData);
}
}

openDropdown() {
  console.log('on focus: ', this.open);
  this.open = true;
}

closeDropdown() {
  console.log('on blur: ', this.open);
  setTimeout(() => {
    this.open = false;
  }, 250);
}

listingDetails(id:any){
  this.router.navigate(['/sub-category/'+id]);
  // const found = this.categorylisting.some((data:any) => data._id === id);
  // if(found){

  // console.log('data is present in categoryListing',found);
  // this.router.navigate(['/sub-category/'+id]);
  // }
  // else{
  //   this.service.subcategorylisting(id).subscribe(
  //     (data: any) => {
  //       console.log('reached here',data);
  //         let nav: NavigationExtras = {
  //           state: {
  //             data: data.data,
  //             type: 'level 0'
  //           }
  //         }
  //         this.router.navigate(['service-provider-list'], nav)
        
  //       },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
}

onTypeChange(value:any){
this.service.classType = value;
console.log('service classtype',this.service.classType);
if(this.userType1 == '1'){
this.getMyClasses(this.service.classType);
}else{
  this.getAllClassesList(this.service.classType);
}
}

onSearch(ev: any) {
  console.log('evevevevevevev', ev);

 // this.categorylisting = { ...this.categorylisting };
 
  this.categorySubcategory = {...this.categorySubcategory};
  console.log('list after search', this.list);
}

onSearchChange(arg: any) {}


 serviceList(){
   if(this.higherPrice === 0){
    //  console.log('latitude',this.service.Latitude);
    //  console.log('longitude',this.service.Longitude);
   let data = {
     allcategory:this.service.allcategory,
     lowerPrice: this.lowerPrice,
     Latitude:this.service.Latitude,
     Longitude:this.service.Longitude,
     distancemax: this.distancemax,
     distancemini:0
   }

   console.log('lat,long data1', data);
   this.service.getServiceList(data).subscribe((data: any) => {
    //this.providersList = data.data;
    
    this.service.FilteredData = data.data;
    console.log('serviceList: in lower filter ', data.data);
  });
  }else if(this.lowerPrice === 0){
    let data = {
    allcategory:this.service.allcategory,
    higherPrice:this.higherPrice,
    Latitude:this.service.Latitude,
    Longitude:this.service.Longitude,
    distancemax: this.distancemax,
    distancemini:0
   }
   console.log('lat,long data2', data);
   this.service.getServiceList(data).subscribe((data: any) => {
    //this.providersList = data.data;
    this.service.FilteredData = data.data;
    console.log('serviceList: in higher filter ', data.data);
    
  });
  }
}


getAllClassesList(value:any) {
  this.service.getClassesList(value).subscribe((resp: any) => {
    console.log('ClassesList: in service', resp.data);
    //this.classesList = resp.data;
this.service.classesList = resp.data;
  });
}

getMyClasses(value:any) {
  this.service.getClassesListProvider(this.Id,value).subscribe((resp: any) => {
    console.log('getMyClasses: in service ', resp);
    this.service.classesList = resp.data;
  });
}

  filter() {
    console.log('filterQuery: ', this.filterQuery);

    this.price !== '' && this.price !== null && this.price !== undefined
      ? (this.filterQuery.price = this.price)
      : (this.filterQuery.price = 0);

    this.minAge !== '' && this.minAge !== null && this.minAge !== undefined
      ? (this.filterQuery.minAge = this.minAge)
      : (this.filterQuery.minAge = 6);

    this.maxAge !== '' && this.maxAge !== null && this.maxAge !== undefined
      ? (this.filterQuery.maxAge = this.maxAge)
      : (this.filterQuery.maxAge = 12);

    console.log('filterQuery 2: ', this.filterQuery);

    this.onValueChanged.emit(this.filterQuery);
  }
}



