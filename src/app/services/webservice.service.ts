import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Subscription } from 'rxjs';
import {Subject} from 'rxjs';
var url = environment.api;

@Injectable({
  providedIn: 'root',
})
export class WebserviceService {
  private logoutData = new Subject<any>();
  private fooSubject = new Subject<any>();
  subscriptions: Subscription[]=[];
  FilteredData:any[] = [];
  allcategory:string;
  lowerPrice:number  = 1;
  higherPrice:number;
  Latitude:number;
  Longitude:number;
  Address:any;
  classType:string = 'kids';
  classesList:any;
  subCategoryId:any;
  kidCategoryId:string="609155f8c1bef37b9230887a";
  adultCategoryId:string="60b41af8f3286a65034e5572";
  categoryId:any ;
  subCategorylisting:any;
  showList:boolean =true;
  classAdult:boolean=true;
  provider_Id:string;
  galleryPhoto:any;
  serviceList:any;

  public slugdata:string;
  public UserBaseURL = url + 'user/';
  public ServiceBaseURL = url + 'service/';
  // public DeliveryBaseURL = url + "commercialPartner/";

  // cartCount = localStorage.getItem("cartCount");
  isLoggedIn = localStorage.getItem('access-token-quickmint') != undefined;

  UserFullName = localStorage.getItem('UserFullName');
  userType = localStorage.getItem('userType');
  // WishlistCount = localStorage.getItem("WishlistCount");

  httpOptions = {};
  constructor(private http: HttpClient) { }

  get_token() {
    var user_token = localStorage.getItem('access-token-quickmint');
    return user_token || '';
  }

  public registerUser(body: any) {
    let url = this.UserBaseURL + 'createUser';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    // httpHeaders = httpHeaders.append("x-access-token", localStorage.getItem('##kkhj@hjh'));
    let options = { headers: httpHeaders };
    return this.http.post(url, body, options);
  }
  public registerProvider(body: any) {
    let url = this.ServiceBaseURL + 'createworkers';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    // httpHeaders = httpHeaders.append("x-access-token", localStorage.getItem('##kkhj@hjh'));
    let options = { headers: httpHeaders };
    return this.http.post(url, body, options);
  }
  public loginUser(body: any, route: number) {
    console.log('route: ', route);
    let url;
    if (route == 2) {
      url = this.UserBaseURL + 'loginUser';
    } else url = this.ServiceBaseURL + 'login';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    // httpHeaders = httpHeaders.append("x-access-token", localStorage.getItem('##kkhj@hjh'));
    let options = { headers: httpHeaders };
    return this.http.post(url, body, options);
  }
  public publicjob(body: any) {
    let url = this.UserBaseURL + 'publicjkjob';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    // httpHeaders = httpHeaders.append("x-access-token", localStorage.getItem('##kkhj@hjh'));
    let options = { headers: httpHeaders };
    return this.http.post(url, body, options);
  }

  public privatejob(body: any) {
    let url = this.UserBaseURL + 'privatejob';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    // httpHeaders = httpHeaders.append("x-access-token", localStorage.getItem('##kkhj@hjh'));
    let options = { headers: httpHeaders };
    return this.http.post(url, body, options);
  }

  public changePassword(body: any) {
    let url = this.UserBaseURL + 'changePassword';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.put(url, body, options);
  }
  public editDetails(body: any) {
    let url = this.UserBaseURL + 'editDetails';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.put(url, body, options);
  }
  public providerEditDetails(body: any) {
    let url = this.UserBaseURL + 'editDetails';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.put(url, body, options);
  }
  public userOwnDetails() {
    let url = this.UserBaseURL + 'userOwnDetails';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }
  public workersgallery(UserPhoto: any) {
    //Sending contact details
    // /service/workersgallery
    let url = this.ServiceBaseURL + 'workersgallery';
    console.log(UserPhoto);
    let input = new FormData();
    input.append('gallery', UserPhoto);
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    httpHeaders.set('Content-Type', 'application/json');
    console.log(input);
    return this.http.post(url, input, options);
  }
  public editDetailsWithImage(UserPhoto: any) {
    //Sending contact details
    let url = this.UserBaseURL + 'editDetailsWithImage';
    console.log(UserPhoto);
    let input = new FormData();
    input.append('UserPhoto', UserPhoto);
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    httpHeaders.set('Content-Type', 'application/json');
    console.log(input);
    return this.http.put(url, input, options);
  }

  public providerEditDetailsWithImage(UserPhoto: any) {
    //Sending contact details
    let url = this.ServiceBaseURL + 'workersprofileimage';
    console.log(UserPhoto);
    let input = new FormData();
    input.append('profile', UserPhoto);
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    httpHeaders.set('Content-Type', 'application/json');
    console.log(input);
    return this.http.post(url, input, options);
  }
  // forgotPasswordbyMail/biswajit.karmakar@brainiuminfotech.com/2
  public forgotPassword(body: any) {
    let url =
      this.UserBaseURL +
      'forgotPasswordbyMail/' +
      body.UserEmail +
      '/' +
      body.UserType;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    let options = { headers: httpHeaders };
    return this.http.put(url, body, options);
  }

  public categorySubcategory() {
    let url = this.UserBaseURL + 'categorysubcategory';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    // httpHeaders = httpHeaders.append(
    //   "x-access-token",
    //   this.get_token()
    // );
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  public Servicelisting() {
    let url = this.ServiceBaseURL + 'servicepricelist';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append(
      "x-access-token",
      this.get_token()
    );
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  public deleteService(Id: any) {
    let url = this.ServiceBaseURL + `servicepricedelet/${Id}`;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.delete(url, options);
  }


  public categorylisting() {
    let url = this.UserBaseURL + 'categorylisting';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    // httpHeaders = httpHeaders.append(
    //   "x-access-token",
    //   this.get_token()
    // );
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  // /user/subcategorylisting/ObjectID()
  public subcategorylisting(id: any) {
    let url = this.UserBaseURL + 'subcategorylisting/' + id;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    // httpHeaders = httpHeaders.append(
    //   "x-access-token",
    //   this.get_token()
    // );
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }


  public topServiceList() {
    let url = this.UserBaseURL + 'topServiceList';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    // httpHeaders = httpHeaders.append(
    //   "x-access-token",
    //   this.get_token()
    // );
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  public PopularServiceList() {
    let url = this.UserBaseURL + 'mostpopularservice';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    // httpHeaders = httpHeaders.append(
    //   "x-access-token",
    //   this.get_token()
    // );
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }


  publicJobList() {
    let url = this.UserBaseURL + 'publicjoblist';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  getLocalData(key: string) {
    return localStorage.getItem(key);
  }

  saveLocalData(key: any, data: any) {

    localStorage.setItem(key, JSON.stringify(data));
  }

  getProvidersList(data: any) {
    //console.log('da ', data);
    data.lowerPrice ? data.lowerPrice : (data.lowerPrice = 1);
    data.minAge ? data.minAge : (data.minAge = 6);
    data.maxAge ? data.maxAge : (data.maxAge = 12);

    data.age_group = data.minAge.toString() + '-' + data.maxAge.toString();

    //console.log('newda ', data);

    let url = `${this.UserBaseURL}listProvider/?category_id=${data.category_id}&sub_category_id=${data.sub_category_id}&Latitude=${data.Latitude}&Longitude=${data.Longitude}&age_group=${data.minAge}-${data.maxAge}&lowerPrice=${data.lowerPrice}`;

   // console.log('age: ', data);
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders, body: data };
    return this.http.get(url, options);
  }

  getServiceList(data:any) {
    // console.log('da ', data);
    // data.lowerPrice ? data.lowerPrice : (data.lowerPrice = 1);
    // data.minAge ? data.minAge : (data.minAge = 6);
    // data.maxAge ? data.maxAge : (data.maxAge = 12);

    // data.age_group = data.minAge.toString() + '-' + data.maxAge.toString();

    console.log('newdata ', this.Longitude,this.Latitude);
    if(data.distancemax!=undefined){
    let url = `${this.UserBaseURL}listofservice?allcategory=${data.allcategory}&lowerPrice=${data.lowerPrice}&higherPrice=${data.higherPrice}&Latitude=${this.Latitude}&Longitude=${this.Longitude}&distancemax=${data.distancemax}&distancemini=1`;
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }
    else{
      let url = `${this.UserBaseURL}listofservice?allcategory=${data.allcategory}&lowerPrice=${data.lowerPrice}&higherPrice=${data.higherPrice}&Latitude=${this.Latitude}&Longitude=${this.Longitude}`;
      let httpHeaders = new HttpHeaders();
      httpHeaders.set('Content-Type', 'application/json');
      httpHeaders = httpHeaders.append('x-access-token', this.get_token());
      let options = { headers: httpHeaders };
      return this.http.get(url, options);
    }
    //console.log('age: ', data);
    
  }

  getPrivateJobList() {
    let url = this.UserBaseURL + 'privatejoblist';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  getProviderPrivateJobList() {
    let url = this.ServiceBaseURL + 'privatejoblist';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  changePrivateJobStatus(data: any) {
    let url = this.ServiceBaseURL + 'privatejobstatus';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.put(url, data, options);
  }

  GetCms(slug:any){
    let url = this.UserBaseURL + `cmslist/${slug}`;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    // httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  getCmsList() {
    let url = this.UserBaseURL + 'cmsmenu';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
   // httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  getAdminContact(){
      let url = this.UserBaseURL + 'cmscontactmenu';
  
      let httpHeaders = new HttpHeaders();
      httpHeaders.set('Content-Type', 'application/json');
     // httpHeaders = httpHeaders.append('x-access-token', this.get_token());
      let options = { headers: httpHeaders };
      return this.http.get(url, options);
  }

  public getNext(api: any) {
    let url = this.UserBaseURL + api;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  public handleSubcat(id: any) { }

  //subcat (level 2) listing

  public getsubcategorylistingOne(id: any) {
    let url = this.UserBaseURL + 'subcategorylistingOne/' + id;
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  //subcat (level 1) listing

  public getsubcategorylistingTwo(id: any) {
    let url = this.UserBaseURL + 'subcategorylistingTwo/' + id;
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }
  //normal subcat (level 0) listing
  public providerServiceList(id: any) {
    let url = this.UserBaseURL + 'providerServiceList/' + id;
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  //get providers of subcatOne (level 1) listing
  public getTrainingProviders(id: any) {
    let url = this.UserBaseURL + 'trainingProviders/' + id;
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  //get providers of subcatTwo (level 2) listing
  public SubjectProviders(id: any) {
    let url = this.UserBaseURL + 'subjectProviders/' + id;
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  public addContact(f: any) {
    console.log('addContact: ', f);
    let url = this.UserBaseURL + 'createcontact';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };

    return this.http.post(url, f, options);
  }

  public addService(f: any) {
    console.log('addService: ', f);
    let url = this.ServiceBaseURL + 'addservice';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'multipart/form-data');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };

    return this.http.post(url, f, options);
  }

  public editService(data:any,id:any) {
   // console.log('addService: ', f);
    let url = this.ServiceBaseURL + 'servicedetails/'+ id;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'multipart/form-data');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };

    return this.http.post(url,data, options);
  }

  public getServiceDetails(id: any) {
    let url = this.ServiceBaseURL + 'servicedetails/' + id;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  public getworkerdetails() {
    let url = this.ServiceBaseURL + 'workerdetails';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  public getBanner() {
    let url = this.UserBaseURL + 'getBanner';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  public getOffer() {
    let url = this.UserBaseURL + 'offerlist';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  public getClassesList(value:any) {
    let url = this.UserBaseURL + `allTrainingServices?${this.classType}=true`;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  public getRelatedClassList(value:any,subcategoryId:any) {
    let url = this.UserBaseURL + `allTrainingServices?${this.classType}=true&sub_category_id=${subcategoryId}`;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }


  public getClassDetail(id: any) {
    let url = this.UserBaseURL + 'TrainingDetails/' + id;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  public bookClass(id: any, body: any) {
    let url = this.UserBaseURL + 'BookTraining/' + id;
    console.log(id, body);
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.post(url, body, options);
  }

  public registerClass(data: any) {
    let url = this.ServiceBaseURL + 'TeacherConference';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };

    return this.http.post(url, data, options);
  }

  public bookService(data: any,TrainingValue:any) {
    let url = this.UserBaseURL + 'BookTraining/' + TrainingValue;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };

    return this.http.post(url, data, options);
  }

  trainingPayment(bookingId:any,token:any){
    let data = {
      token : token
    }

    console.log('data in training service', bookingId, token);
    let url = this.UserBaseURL + 'traningpaymentpayment/' + bookingId;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };

    return this.http.post(url, data, options);
  }

  servicebooking(data:any) {
    let url = this.ServiceBaseURL + 'TeacherConference/';
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.post(url, data, options);
  }

  public getClassesListProvider(id: any,value:any) {
    let url = this.ServiceBaseURL + 'TrainingService/' + id;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  getbookedTraining(id: any) {
    let url = this.UserBaseURL + 'usertrainingdetails/' + id;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  getUserBookedList() {
    let url = this.UserBaseURL + 'usertraininglist/';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  AddStripeAccount(){
    let url = this.ServiceBaseURL + 'stripaccount/';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  VerifyStripeAccount(){
    let url = this.ServiceBaseURL + 'stripaccountverify/';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  getKidsCategory(){
    let url = this.UserBaseURL + 'subcategorylisting/609155f8c1bef37b9230887a';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }
  getAdultsCategory(){
    let url = this.UserBaseURL + 'subcategorylisting/60b41af8f3286a65034e5572';

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  viewDetails(providerId:any){
    let url = this.UserBaseURL + 'viewdetails/' + providerId;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    //httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  follow(data:any){
   // console.log('data in training service', bookingId, token);
    let url = this.UserBaseURL + 'followcreate/'
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.post(url, data, options);
  }
  getFollowerList(){
    let url = this.UserBaseURL + 'follower/';
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    //httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  like(data:any){
    let url = this.UserBaseURL + 'likecreate/'
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };

    return this.http.post(url, data, options);
  }

  getLikeList(){
    let url = this.UserBaseURL + 'likelist/';
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    //httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  public addCredentials(f: any) {
    console.log('addCredentials: ', f);
    let url = this.ServiceBaseURL + 'addcredentials';
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };

    return this.http.post(url, f, options);
  }

    addFAQs(f: any) {
    let url = this.ServiceBaseURL + 'createfaq';
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };

    return this.http.post(url, f, options);
  }
  getfaqList(){
    let url = this.ServiceBaseURL + 'listoffaq';
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  deleteFaq(Id:any){
      let url = this.ServiceBaseURL + `faqdelete/${Id}`;
      let httpHeaders = new HttpHeaders();
      httpHeaders.set('Content-Type', 'application/json');
      httpHeaders = httpHeaders.append('x-access-token', this.get_token());
      let options = { headers: httpHeaders };
      return this.http.delete(url, options);   
  }

  getfeedbackList(){
    let url = this.ServiceBaseURL + 'providerfeedback';
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  checkFollowing(providerId:string){
    let url = this.UserBaseURL + 'follower/' +providerId;
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  checkLiking(providerId:string){
    let url = this.UserBaseURL + 'likelist/' +providerId;
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };
    return this.http.get(url, options);
  }

  provideFeedback(data:any){
    let url = this.UserBaseURL + 'SubmitReviewRating'
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('x-access-token', this.get_token());
    let options = { headers: httpHeaders };

    return this.http.post(url, data, options);
  }


  dispose(){
    this.subscriptions.forEach(subscription =>subscription.unsubscribe())
  }

  publishlogoutData(data: any) {
    this.logoutData.next(data);
  }

  getObservablelogout(): Subject<any> {
    return this.logoutData;
  }

  getObservable(): Subject<any> {
    return this.fooSubject;
}
publishSomeData(data: any) {
  this.fooSubject.next(data);
}
}
