import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProviderServiceAddModalComponent } from '../provider-service-add-modal/provider-service-add-modal.component';
import { FormBuilder, Validators, FormsModule, FormArray, FormControl } from '@angular/forms';
// import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

// import * as _ from 'lodash';
import { WebserviceService } from '../services/webservice.service';
import * as moment from 'moment';
@Component({
  selector: 'app-provider-my-profile',
  templateUrl: './provider-my-profile.component.html',
  styleUrls: ['./provider-my-profile.component.css'],
})
export class ProviderMyProfileComponent implements OnInit {
  UserPhoto: any;
  fileName: any;
  profileDetailsForm: any;
  passwordForm: any;
  passwordFormSubmitted: boolean = false;
  profileDetailsFormSubmitted: boolean = false;
  profileImage = false;
  galleryImages: any;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private service: WebserviceService,
    private toastr: ToastrService,
    private router: Router,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.profileDetailsForm = this.newForm();

    this.passwordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      UserType: ['user'],
    });
    this.getProfileDetails();
  }

  newForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      UserName: ['', [Validators.required]],
      UserFullName: ['', [Validators.required]],
      // UserEmail: ['', [Validators.required, Validators.email]],
      UserPhone: ['', [Validators.required]],
      startDate: [moment(new Date()).format('DD/MM/YYYY'), [Validators.required]],
      endDate: ['', [Validators.required]],
      schedule: new FormArray([
        new FormControl([]),
        new FormControl([]),
        new FormControl([]),
        new FormControl([]),
        new FormControl([]),
        new FormControl([]),
        new FormControl([]),

      ]),
    });
  }

  get f() {
    return this.passwordForm.controls;
  }
  get fp() {
    return this.profileDetailsForm.controls;
  }

  passwordFormOnSubmit() {
    if (!this.passwordForm.valid) {
      this.passwordFormSubmitted = true;
      // this.presentToast("Please fill all required data");
      this.toastr.warning('Please fill all required data');
      return;
    }
    if (
      this.passwordForm.value.newPassword !=
      this.passwordForm.value.confirmPassword
    ) {
      this.toastr.warning('Password and confirm password must be matched');
      return;
    }
    this.service.changePassword(this.passwordForm.value).subscribe(
      (data) => {
        // // console.log(data);
        if ((<any>data)['success'] == false) {
          // this.presentToast((<any>data)["message"]);
          this.toastr.warning((<any>data)['message']);
        } else if ((<any>data)['success'] == true) {
          // this.presentToast((<any>data)["message"]);
          this.toastr.success((<any>data)['message']);
          this.passwordFormSubmitted = false;
          // this.passwordForm.reset();
          // this.router.navigate(['/personalinfo'])
        }
      },
      (err) => {
        // console.log(err);
        // this.presentToast(err);
        this.toastr.warning(err);
      }
    );
  }

  onSubmit() {
    if (!this.profileDetailsForm.valid) {
      this.profileDetailsFormSubmitted = true;
      // this.presentToast("Please fill all required data");
      this.toastr.warning('Please fill all required data');

      return;
    }
    this.service.providerEditDetails(this.profileDetailsForm.value).subscribe(
      (data) => {

        this.toastr.success((<any>data)['message']);
        this.profileDetailsFormSubmitted = false;

      },
      (err) => {
        console.log(err);
      }
    );

    let data = {

        strat_date : this.profileDetailsForm.value.startDate ,
        end_date : this.profileDetailsForm.value.endDate ,
        schedule :this.profileDetailsForm.value.schedule
   
    }
    this.service.postSchedule(data).subscribe(resp => {
      console.log("postSchedule: ", resp)
    })
  }

  getProfileDetails() {
    this.service.getworkerdetails().subscribe((resp: any) => {
       console.log('getworkerdetails: ', resp.data.schedule[0].schedule);

      this.profileImage = resp.data.imageUrl;
      this.galleryImages = resp.data.galleryUrl;

      this.profileDetailsForm.controls['email'].setValue(
        resp.data.provider.UserEmail
      );
      this.profileDetailsForm.controls['UserName'].setValue(
        resp.data.provider.UserName
      );
      this.profileDetailsForm.controls['UserFullName'].setValue(
        resp.data.provider.UserFullName
      );
      this.profileDetailsForm.controls['UserPhone'].setValue(
        resp.data.provider.UserPhone
      );
      this.profileDetailsForm.controls['startDate'].setValue(
        resp.data.schedule[0].start_date
      );
      this.profileDetailsForm.controls['endDate'].setValue(
        resp.data.schedule[0].end_date
      );
      this.profileDetailsForm.get('schedule').setValue(
        resp.data.schedule[0].schedule
      );
      // console.log('profileDetailsForm: ', this.profileDetailsForm.get('schedule'));

    });
  }

  openAddServiceDialog() {
    const dialogRef = this.dialog.open(ProviderServiceAddModalComponent, {
      width: '620px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result`);
    });
  }
  onProfileImageSelected(event: any) {
    // console.log('Before' + this.UserPhoto);

    var files = event.target.files;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // console.log(mimeType);

      this.toastr.warning('Only images are supported.');

      return;
    }

    if (event.target.files.length > 0) {
      // console.log(event.target.files[0].name);
    }
    if (files.length === 0) return;
    // console.log(mimeType);
    if (event.target.files && event.target.files[0]) {
      this.UserPhoto = event.target.files[0];
      // console.log(this.UserPhoto);
      const reader = new FileReader();
      // reader.onload = e => this.selectedUserPhoto = reader.result.toString();
      this.fileName = event.target.files[0].name;
      reader.readAsDataURL(this.UserPhoto);
      // console.log('After' + this.UserPhoto);
      reader.onload = (ev: any) => {
        this.profileImage = ev.target.result;
      };
      this.service.providerEditDetailsWithImage(this.UserPhoto).subscribe(
        (data) => {
          // console.log(data);
          // this.imageUrl = "https://nodeserver.mydevfactory.com:4290/" + (<any>data)["data"]["UserPhoto"]
          // this.profileImage = this.UserPhoto.name;
          this.ref.detectChanges();
          // this.presentToast((<any>data)["message"]);
          this.toastr.success((<any>data)['message']);
          // this.profileDetailsFormSubmitted = false;
          // this.profileDetailsForm.reset();
          // this.router.navigate(['/login'])
        },
        (err) => {
          // console.log(err);
        }
      );
    }
  }
  onFileSelected(event: any) {
    // console.log('Before' + this.UserPhoto);

    var files = event.target.files;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // console.log(mimeType);

      this.toastr.warning('Only images are supported.');

      return;
    }

    if (event.target.files.length > 0) {
      // console.log(event.target.files[0].name);
    }
    if (files.length === 0) return;
    // console.log(mimeType);
    if (event.target.files && event.target.files[0]) {
      this.UserPhoto = event.target.files[0];
      // console.log(this.UserPhoto);
      const reader = new FileReader();
      // reader.onload = e => this.selectedUserPhoto = reader.result.toString();
      this.fileName = event.target.files[0].name;
      reader.readAsDataURL(this.UserPhoto);
      // console.log('After' + this.UserPhoto);
      reader.onload = (ev: any) => {
        this.galleryImages.push(ev.target.result);
      };
      this.service.workersgallery(this.UserPhoto).subscribe(
        (data) => {
          // console.log(data);
          // this.imageUrl = "https://nodeserver.mydevfactory.com:4290/" + (<any>data)["data"]["UserPhoto"]
          // this.presentToast((<any>data)["message"]);
          // this.galleryImages.push(this.UserPhoto);
          this.toastr.success((<any>data)['message']);
          // this.profileDetailsFormSubmitted = false;
          // this.profileDetailsForm.reset();
          // this.router.navigate(['/login'])
        },
        (err) => {
          // console.log(err);
        }
      );
    }
  }
  
  consol(day:number, time:number, index: number) {
    // console.log("day: ", day, "time: ", time, "index: ", index)
    // console.log(this.profileDetailsForm.value)
    // console.log(this.profileDetailsForm.get('schedule'))
    // console.log(this.profileDetailsForm.get('schedule').controls[index])

    let schedule = this.profileDetailsForm.get('schedule').controls[index].value
    // console.log(time, schedule, this.profileDetailsForm.get('schedule').controls[index].value.includes(time))
    if (schedule.includes(time)) {
      let newval = schedule.filter((el:number) => el != time)
      this.profileDetailsForm.get('schedule').controls[index].setValue(newval)
    } else {
      schedule.push(time)
      this.profileDetailsForm.get('schedule').controls[index].setValue(schedule)
    }
    // console.log(this.profileDetailsForm.get('schedule').controls[index].value)

  }

  scheduleIncludes(day:any, time:number, index: number) {
    console.log("day: ", day, "time: ", time, "index: ", index)
    console.log("value: ",this.profileDetailsForm.get('schedule').controls[index].value)
    let schedule = this.profileDetailsForm.get('schedule').controls[index].value

    if (schedule.includes(time)) {
      return true
    } else return false

  }
}
