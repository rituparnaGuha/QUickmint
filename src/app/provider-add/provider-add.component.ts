import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { WebserviceService } from '../services/webservice.service';

@Component({
  selector: 'app-provider-add',
  templateUrl: './provider-add.component.html',
  styleUrls: ['./provider-add.component.css'],
})
export class ProviderAddComponent implements OnInit {
  newServiceForm: any;
  categorylisting: any;
  subcategorylisting: any;
  subcategoryonelisting: any;
  subcategorytwolisting: any;
  showSubCat: boolean;
  newServiceFormSubmitted: boolean;

  image:any;
  imageLink:any;
  title:any;
  description:any;
  category_id:any;
  sub_category_id:any;
  sub_category_one_id:any;
  sub_category_two_id:any;
  job_start:any;
  job_end:any;
  Price:any;
  image1:any;
  

  subcatone = false;
  subcattwo = false;
  constructor(
    private formBuilder: FormBuilder,
    private service: WebserviceService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
   // this.newServiceForm = this.newForm();
    this.getCategory();
  }
  // newForm() {
  //   return this.formBuilder.group({
  //     title: ['', [Validators.required]],
  //     description: ['', [Validators.required]],
  //     provider_id: [localStorage.getItem('userId')],
  //     category_id: ['', [Validators.required]],
  //     sub_category_id: [''], //[Validators.required]
  //     time: ['', [Validators.required]],
  //     hr: [''],
  //     mn: [''],
  //     Price: ['', [Validators.required]],
  //     start_date: ['', [Validators.required]],
  //     job_start: ['', [Validators.required]],
  //     job_end: ['', [Validators.required]],
  //     sub_category_one_id: '',
  //     sub_category_two_id: '',
  //     age_group: '6-12',
  //   });
  // }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.imageLink = event.target.files[0];
      this.image1 = event.target.files[0];
    }
  }

  getCategory() {
    this.service.categorylisting().subscribe(
      (data) => {
        console.log(data);
        this.categorylisting = (<any>data)['data'];
        // this.toastr.success((<any>data)["message"]);

        // this.router.navigate(['/login'])
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getSubcategory() {
    //console.log(this.newServiceForm.value.category_id);
    this.service
      .subcategorylisting(this.category_id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.subcategorylisting = (<any>data)['data'];
          data.count === 0
            ? (this.showSubCat = false)
            : (this.showSubCat = true);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getSubCatOne() {
    // console.log(
    //   'sub_category_one_id: ',
    //   this.newServiceForm.value.sub_category_id
    // );
    // console.log('sub_category_one_id: ', this.newServiceForm.value);

    this.service
      .getsubcategorylistingOne(this.sub_category_id)
      .subscribe(
        (data: any) => {
          console.log('getSubCatOne: ', data);
          this.subcategoryonelisting = (<any>data)['data'];
          data.count === 0 ? (this.subcatone = false) : (this.subcatone = true);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getSubCatTwo(s: any) {
    // console.log(
    //   'sub_category_two_id: ',
    //   this.newServiceForm.value.sub_category_one_id
    // );
    // console.log('sub_category_one_id: ', this.newServiceForm.value);

    this.service
      .getsubcategorylistingTwo(this.sub_category_one_id)
      .subscribe(
        (data: any) => {
          console.log('getSubCatTwo: ', data);
          this.subcategorytwolisting = (<any>data)['data'];
          data.count === 0 ? (this.subcattwo = false) : (this.subcattwo = true);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onSubmit() {
    // let op_time = new Date(this.newServiceForm.value.jobDate)
    // let o = moment(this.newServiceForm.value.time, ['h:mm']).format('HH');
    // let o2 = moment(this.newServiceForm.value.time, ['h:mm']).format('mm');

    // this.newServiceForm.value.hr = parseInt(o);
    // this.newServiceForm.value.mn = parseInt(o2);
    // console.log(this.newServiceForm.value);

    // if (!this.newServiceForm.valid) {
    //   this.newServiceFormSubmitted = true;
    //   this.toastr.warning('Please fill all required data');
    //   return;
    // }

    let user_id :any = localStorage.getItem('userId');

    const formData = new FormData();
    formData.append("provider_id",user_id);
    formData.append("category_id", this.category_id);
    formData.append("sub_category_id",this.sub_category_id);
    formData.append("subOne_category_id",this.sub_category_one_id );
    formData.append("subTwo_category_id",this.sub_category_two_id );
    formData.append("Price",this.Price);
    formData.append("title", this.title);
    formData.append("description",this.description);
    formData.append("job_start", this.job_start);
    formData.append("job_end", this.job_end);
    formData.append("images",this.imageLink);
    //formData.append("title",this.rating);


    this.service.addService(formData).subscribe(
      (data) => {
        console.log('publicjob: ', data);
        //this.toastr.success((<any>data)['message']);
        this.toastr.success('Your service has been added')
        this.newServiceFormSubmitted = false;
       // this.newServiceForm.reset();
       this.router.navigate(['/service-list']);
      },
      (err) => {
        console.log(err);
        this.toastr.success('Service has not been added. Please try later')
      }
    );
  }
}
