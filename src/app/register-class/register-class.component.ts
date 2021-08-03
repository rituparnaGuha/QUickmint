import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WebserviceService } from '../services/webservice.service';
import * as moment from 'moment';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-register-class',
  templateUrl: './register-class.component.html',
  styleUrls: ['./register-class.component.css'],
})
export class RegisterClassComponent implements OnInit {
  classForm: any;
  classFormSubmitted = false;
  id = localStorage.getItem('userId');
  title:string;
  overview:string;
  total_strength:string;
  price:string;
  image:any;
  classLength:string;
  day:string;
  startDate:string;
  startTime:string;
  endTime:string;
  UserType:string = 'kids';
  selection:any = [];
  expertise:any;
  selectedDays:any;
  selectedExpertise:any;
  imageLink:any;
  category:string="";
  policy:any;
  formatTime:any;

  kidCategory1:any;
  AdultsCategory1:any;

  // public adultsCategory:any = [
  // {item:'English'},
  // {item:'Maths'},
  // {item:'Social Studies'},
  // {item:'Science'},
  // {item:'World Languages'},
  // {item:'Games'},
  // ];

  // public kidsCategory:any = [
  //   {item:'Art and Painting'},
  //   {item:'Dance'},
  //   {item:'Music'},
  //   {item:'Business'},
  //   {item:'Tech'},
  //   {item:'Craft'},
  // ];


  // public checks: Array<any> = [
  //   { value: 'Maths' },
  //   { value: 'Science' },
  //   { value: 'Social science' },
  //   { value: 'Biology' },
  //   { value: 'Physics' },
  //   { value: 'Chemistry' },
  // ];
  constructor(
    private formBuilder: FormBuilder,
    private service: WebserviceService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.classForm = this.newForm();
    this.getCategory();
  }

  radioChange(){
    console.log('radio',this.UserType);
  }

  getCategory(){
    var that = this;
    this.service.getAdultsCategory().subscribe((resp:any)=>{
      console.log( 'adult response',resp);
      that.AdultsCategory1= resp.data;
    })
    this.service.getKidsCategory().subscribe((resp:any)=>{
      console.log( 'kids response',resp);
      that.kidCategory1 = resp.data;
    })

  }

  get f() {
    return this.classForm.controls;
  }

  newForm() {
    return this.formBuilder.group({
      provider_id: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      bussiness_name: ['', [Validators.required]],
      total_strength: ['', [Validators.required]],
      expertise: [[]],
      cost: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      Slot: [{ days: 1, time: '3:00 PM' }, [Validators.required]],
      days: [''],
      time: [''],
      Location: [
        { latitude: '54.4545', longitude: '32.454' },
        [Validators.required],
      ],
    });
  }

  selectChange(){
console.log('category',this.category);
  }

  onCheckChange(event: any) {
    // const formArray = this.classForm.controls['expertise'];

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      this.classForm.value.expertise.push(event.target.value);
      // console.log(this.classForm.value.expertise)
    } else {
    /* unselected */
      // find the unselected element
      let i: number = 0;

      this.classForm.value.expertise.forEach((ctrl: any) => {
        // console.log(ctrl, "===", event.target.value)
        if (ctrl == event.target.value) {
          // Remove the unselected element from the arrayForm
          this.classForm.value.expertise.splice(i, 1);
          // console.log(this.classForm.value.expertise)

          return;
        }
      });
    }
  }

  onSubmit() {
    console.log(this.classForm);
    this.classForm.controls['provider_id'].setValue(this.id);
    if (!this.classForm.valid || this.classForm.value.expertise == '') {
      this.classFormSubmitted = true;
      this.toastr.warning('Please fill all required data');
      return;
    }
    let v = { ...this.classForm.value };
    v.Slot.days = v.days;
    v.Slot.time = v.time;
    console.log(v);

    this.service.registerClass(v).subscribe((resp: any) => {
      console.log(resp);
      if (resp.success) {
        this.classForm.reset();
        this.classForm.value.expertise = [];
        this.toastr.success('Class Registered Successfully!');
      }
    });
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.imageLink = event.target.files[0];
    }
  }

registerClass(){

  let startTime2 = moment(this.startTime, ["h:mm A"]).format("HH:mm:ss");
  let endTime2 = moment(this.endTime,["h:mm A"]).format("HH:mm:ss");
 // console.log('start time1',startTime2);

//this.formatTime = moment(`${this.startDate} ${startTime2}`).format();
  //console.log('format',this.formatTime);


  let data = {
  title:this.title,
  overview:this.overview,
  total_strength:this.total_strength,
  price:this.price,
  image:this.imageLink,
  classLength:this.classLength,
  days:this.selectedDays,
  startDate:moment(this.startDate).format(),
  startTime:moment(`${this.startDate} ${startTime2}`).format(),
  endTime:moment(`${this.startDate} ${endTime2}`).format(),
  UserType:this.UserType,
  expertise: this.selectedExpertise,
  category:this.category
  }
  console.log('register data',data);
  // let toUTC = new Date("June 2, 2015 8:04:53").toUTCString();
  // console.log('utc',toUTC);
  let d = new Date(this.startDate);
  //let n = d.toISOString();
  //console.log('iso string',n);
  if(!this.title){
    this.toastr.warning("Please add Title");
  }else if(!this.UserType){
    this.toastr.warning("Please select User Type in top:Adult or Kids");
  }else if(!this.total_strength){
    this.toastr.warning("Please enter total strength of class");
  }else if(!this.price){
    this.toastr.warning("Please enter price");
  }
  else if(!this.startDate){
    this.toastr.warning("Please enter start Date");
  }
  else if(!this.startTime){
    this.toastr.warning("Please enter start Time");
  }
  else if(!this.endTime){
    this.toastr.warning("Please enter end Time");
  }
else{
  const formData = new FormData();
  formData.append("title", this.title);
    formData.append("overview", this.overview);
    formData.append("class_for",this.UserType);
    formData.append("expertise", this.selectedExpertise);
    formData.append("total_strength", this.total_strength);
    formData.append("price", this.price);
    formData.append("sub_category_id",this.category);
    formData.append("class_length", this.classLength);
    formData.append("strat_date",moment(this.startDate).format());
    formData.append("start_tiem", moment(`${this.startDate} ${startTime2}`).format());
    formData.append("end_time",moment(`${this.startDate} ${endTime2}`).format());
    formData.append("select_day", this.selectedDays);
    formData.append("image", this.imageLink);

    this.service.servicebooking(formData).subscribe((resp: any) => {
      console.log("Add resp: ", resp);
     // this.banners.push(resp.data);
     if(resp.success == true){
      this.toastr.success("Your Class has been added!");
     }


      this.title = "",
      this.overview = "",
      this.UserType = "kids",
      this.selectedExpertise = "";
      this.price="",
      this.category = "",
      this.classLength = "",
      this.startDate = "",
      this.startTime = "",
      this.endTime ="",
      this.selectedDays = ""
   });
  
  }
}

getSelection(item:any) {
  return this.selection.findIndex((s:any) => s.id === item.id) !== -1;
}

changeHandler(item: any, event: KeyboardEvent) {
  const id = item.id;

  const index = this.selection.findIndex((u:any) => u.id === id);
  if (index === -1) {
    // ADD TO SELECTION
    // this.selection.push(item);
    this.selection = [...this.selection, item];
  } else {
    // REMOVE FROM SELECTION
    this.selection = this.selection.filter((user:any) => user!== item)
    // this.selection.splice(index, 1)
  }
}

save() {
  //console.log(this.selection);
  console.log('exp',this.expertise)
}



}
