import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { WebserviceService } from 'src/app/services/webservice.service';
import { JitsiComponent } from '../jitsi/jitsi.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-sub-category-class',
  templateUrl: './sub-category-class.component.html',
  styleUrls: ['./sub-category-class.component.css']
})
export class SubCategoryClassComponent implements OnInit, OnDestroy {
  level = 0
  category_id: any;
  subcategorylisting: any;
  breadcrumbs = [];
  providersList: any = null;
  url: any;
  userType = localStorage.getItem('userType');
  id = localStorage.getItem('userId');
  //kidCategoryId:string="609155f8c1bef37b9230887a";
  //adultCategoryId:string="60b41af8f3286a65034e5572";
  baseUrl: any;
  photoUrl: string = 'https://nodeserver.mydevfactory.com:4290/';


  classesList: any;
  //providersList: any;
  data: any;
  serviceData: any;
  trainingValue: any;
  stripeTokenData: any;
  BookingObjectId: any;
  price: number;
  title: string;
  bookedArray: any;
  bookinglist: any = [];
  isDisabled = true;
  currentTime: any;
  serviceTime: any;
  currentdateComponent: any;
  startdateComponent: any;
  currenttimeComponent: any;
  starttimeComponent: any;
  // endDate1:any;
  // endTime1:any;
  enddateComponent: any;
  endtimeComponent: any;
  difference1: any;
  difference2: any;
  showList: boolean = true;
  token: any = localStorage.getItem('access-token-quickmint')
  constructor(
    private route: ActivatedRoute,
    public service: WebserviceService,
    public router: Router,
    public dialog: MatDialog,
    public toast: ToastrService

  ) {

  }

  ngOnInit(): void {

    this.service.categoryId = this.service.kidCategoryId;
    this.getSubcategories();
    // this.route.params.subscribe(event => {
    //   this.category_id = event.id;
    //   console.log(this.category_id)
    //   this.getSubcategories()
    // });
    this.userType == '1' ? this.getMyClasses() : this.getRelatedClasses(this.service.classType, this.service.subCategoryId)
    // this.getAllClassesList();
    this.invokeScript();

    this.checkPayment();
    this.GetUserBookedList();
    //console.log('booked list',this.bookedArray);
    //this.currentTime = new Date().toISOString();

    this.currentTime = moment().toISOString();
    console.log('current time :', this.currentTime);
    //var str1 = this.currentTime;
    var currentdate = moment(this.currentTime);
    this.currentdateComponent = currentdate.format('YYYY-MM-DD');
    this.currenttimeComponent = currentdate.format('HH:mm:ss');
    console.log('date component1', this.currentdateComponent);
    console.log('time component1', this.currenttimeComponent);

  }



  getSubcategories() {
    console.log('subcategories id', this.service.categoryId);
    console.log('access-token-quickmint', localStorage.getItem('access-token-quickmint'));
    this.service.subcategorylisting(this.service.categoryId).subscribe(
      (data: any) => {
        console.log('subcategory', data);
        if (data.count > 0) {
          this.service.subCategorylisting = (<any>data)["data"];
          this.level = 1
        } else {
          let nav: NavigationExtras = {
            state: {
              data: data,
              type: "none"
            }
          }
          this.router.navigate(['service-provider-list'], nav)
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getData(data: any) {
    console.log('subcategory data _id', data._id);
    this.service.subCategoryId = data._id;
    //console.log('sub category classlist',this.service.classesList);
    this.service.showList = false;
    this.getRelatedClasses(this.service.classType, this.service.subCategoryId);
    //this.service.subCategoryId = 
  }

  async getProviders(data: any) {
    //console.log("getProviders", data)
    console.log("level: ", this.level)
    if (this.level == 1) {
      // check if any subcat
      // yes, change level to 2, call subcatTwo
      // no, sp list TrainingProviders

      // 1
      this.service.getsubcategorylistingOne(data._id).subscribe((resp: any) => {
        // console.log("level getsubcategorylistingOne: ", this.level)
        console.log(resp)
        // 2
        if (resp.count > 0) {
          this.level = 2
          console.log("leveeeeel: ", this.level)

          this.subcategorylisting = resp.data
        }
        // 3
        else {
          let nav: NavigationExtras = {
            state: {
              data: data,
              type: "level 0"
            }
          }
          this.router.navigate(['service-provider-list'], nav)
        }
      })
    } else if (this.level == 2) {
      // check if any subcat
      // yes, change level to 3, call ???
      // no, sp list SubjectProviders
      this.service.getsubcategorylistingTwo(data._id).subscribe((resp: any) => {
        console.log("level getsubcategorylistingTwo: ", this.level)
        console.log(resp)
        // 2
        if (resp.count > 0) {
          this.level = 3
          this.subcategorylisting = resp.data
        }
        // 3
        else {
          let nav: NavigationExtras = {
            state: {
              data: data,
              type: "level 1"
            }
          }
          this.router.navigate(['service-provider-list'], nav)
        }
      })


    } else if (this.level == 3) {
      let nav: NavigationExtras = {
        state: {
          data: data,
          type: "level 2"
        }
      }
      this.router.navigate(['service-provider-list'], nav)
    }
  }


  meetingEnable(start: any, end: any): Boolean {
    // console.log('class time1',start)
    var startdate = moment(start);
    var enddate = moment(end);
    this.startdateComponent = startdate.format('YYYY-MM-DD');
    this.starttimeComponent = startdate.format('HH:mm:ss');
    this.enddateComponent = enddate.format('YYYY-MM-DD');
    this.endtimeComponent = enddate.format('HH:mm:ss');
    // console.log('date component2',this.startdateComponent);
    // console.log('time component2',this.starttimeComponent);
    // console.log('time compenent1',this.currenttimeComponent);
    if (this.currentdateComponent === this.startdateComponent) {
      var starttime = `${this.starttimeComponent}`;
      var currenttime = `${this.currenttimeComponent}`;
      var endtime = `${this.endtimeComponent}`;

      this.difference1 = moment.utc(moment(starttime, "HH:mm:ss").diff(moment(currenttime, "HH:mm:ss"))).format("HH:mm:ss");
      console.log('difference1', this.difference1);

      this.difference2 = moment.utc(moment(currenttime, "HH:mm:ss").diff(moment(endtime, "HH:mm:ss"))).format("HH:mm:ss");
      console.log('difference2', this.difference2);

      //console.log( "javascript convert hours to minutes : ", this.convertHourstoMinute(this.difference));
      var fifteenmin = 10 * 60;
      var startseconds = this.convertHourstoMinute(this.difference1);
      var endseconds = this.convertHourstoMinute(this.difference2)
      console.log('seconds', startseconds, 'fifteen', fifteenmin);


      var currentTime1 = moment(this.currentTime, 'HH:mm:ss')
      var startTime1 = moment(starttime, 'HH:mm:ss');
      var endTime1 = moment(endtime, 'HH:mm:ss');
      // var timecheck1 = start.isBefore(this.currentTime);
      // var timecheck2 = enddate.isAfter(this.currentTime);
      console.log('start time', starttime, 'current time', currenttime, 'end time', endtime);
      //console.log('time check2',timecheck2);  //true

      if ((startseconds <= fifteenmin || endseconds <= fifteenmin) || ((starttime < currenttime) && (currenttime < endtime))) {
        return false;
      }
      return true;
    } else {
      return true;
    }
  }

  convertHourstoMinute(str: any) {
    let [hours, minutes, seconds] = str.split(':');
    return (+hours * 60 * 60) + (+minutes * 60) + (+seconds);
  }

  joinMeeting(c: any) {
    const dialogRef = this.dialog.open(JitsiComponent, {
      // width: '250px',
      data: {
        provider: { _id: c.provider_id },
        user: { _id: c._id },
      },
    });
  }
  async GetUserBookedList() {
    var that = this;
    this.service.getUserBookedList().subscribe((resp: any) => {
      console.log('get User booked list ', resp);
      this.bookedArray = resp.data;
      //this.bookedArray.push(...resp.data);

      //to getting list of id's accepted payment in booking list
      this.bookinglist = this.bookedArray.filter((data: any) => {
        if (data.booking_status === 'accept' && data.user_id == this.id) {
          return (data.bookedService._id);
        }
      }).map((data1: any) => {
        return data1.bookedService._id
      })
      console.log('checked list', this.bookinglist);

    });
    //this.bookedArray = that.bookedArray;
    console.log('booked array', this.bookedArray);
  }
  async makePayment(c: any) {
    console.log('class', c);
    var ref = this;
    ref.price = c.price;
    this.title = c.title;
    let serviceData =
    {
      provider_id: c.provider_id._id,
    }
    let trainingValue = c._id;

    //console.log('book request',Servicedata);
    //BookingObject
    this.service.bookService(serviceData, trainingValue).subscribe((resp: any) => {
      console.log('book response', resp);
      var that = this;
      // let booking = resp._id;
      let stripe;
      that.BookingObjectId = resp.data._id;
      //console.log('that.booking',this.BookingObjectId);
      // use _id of book response for payment;

      //stripTokenData
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51J0JswEh4mw6fxvKsQTAQeqhTu5VOD9ojd5Ur2lc65WNaBxSsn8jhrTlJIR1ooBgSgp5Rf5PMoZTwfBHrE71mqxY00Actf65yq',
        token: function (stripeToken: any) {
          console.log('stripeToken', stripeToken);
          that.stripeTokenData = stripeToken.id;
          // alert('token has been created');
          stripe = stripeToken._id
          that.service.trainingPayment(that.BookingObjectId, that.stripeTokenData).subscribe((resp: any) => {
            console.log('training response', resp);
            if (resp.message == 'Success') {
              that.toast.success('booking successful!');
            }
            else {
              that.toast.success('some error has occurred while booking');
            }
            that.GetUserBookedList();
            // use _id of book response for payment;
          })
        },
      });

      paymentHandler.open({
        name: this.title,
        //description:'products',
        amount: ref.price * 100
      })
      // console.log('that book',that.BookingObjectId);
    });
  }

  gotoDetails(c: any) {
    let nav: NavigationExtras = {
      state: {
        data: c.provider_id._id,
        //type: "none"
      }
    }
    this.router.navigate(['/view-details'], nav)
  }
  invokeScript() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(script);
    }
  }
  checkPayment() {
    let _id = '60f0bc3e0de8ca794683cc68';
    this.service.getbookedTraining(_id).subscribe((resp: any) => {
      console.log('getbookedTraining: ', resp);
    });
  }

  getRelatedClasses(value: any, subcategoryId: any) {
    // var Id = '609157fbc1bef37b9230887b'; // Maths id
    //var Id = this.service.subCategoryId;
    // console.log('classId',Id);
    this.service.getRelatedClassList(value, subcategoryId).subscribe((resp: any) => {
      console.log('ClassesList: in service', resp.data);
      //this.classesList = resp.data;
      this.service.classesList = resp.data;
    });
  }

  getMyClasses() {
    let value = this.service.classType;
    this.service.getClassesListProvider(this.id, value).subscribe((resp: any) => {
      console.log('getMyClasses: ', resp);
      this.service.classesList = resp.data;
    });
  }

  getAllClassesList() {
    let value = this.service.classType;
    this.service.getClassesList(value).subscribe((resp: any) => {
      console.log('getAllClassesList: ', resp);
      this.service.classesList = resp.data;
    });
  }
  displayExpertise(c: any) {
    // console.log("c",  c)
    let exp = '';
    for (let [i, expertise] of c.expertise.entries()) {
      i == c.expertise.length - 1
        ? (exp += expertise)
        : (exp += expertise + ', ');
    }
    return exp;
  }

  ngOnDestroy() {
    this.service.showList = true;
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, { width: '620px' });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result`);
    });
  }

}
