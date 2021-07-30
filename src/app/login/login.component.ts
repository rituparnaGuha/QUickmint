import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { WebserviceService } from '../services/webservice.service';

import { ToastrService } from 'ngx-toastr';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  fieldTextType: boolean = false;
  userType :any;
  
  @Output() ev: EventEmitter<any>;
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private service: WebserviceService,
    private toastr: ToastrService,
    private router: Router,
    public commonService: CommonService
  ) {}

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterComponent, { width: '950px' });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result`);
    });
  }
  openForgotPasswordDialog() {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '950px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result`);
    });
  }
  userForm: any;
  userFormSubmitted: boolean = false;

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      UserEmail: ['', [Validators.required, Validators.email]],
      UserPassword: ['', [Validators.required]],
      UserType: [''],
    });
  }

  get f() {
    return this.userForm.controls;
  }
  onSubmit() {
    console.log(this.userForm.value);
    if (!this.userForm.valid) {
      this.userFormSubmitted = true;
      this.toastr.warning('Please fill all required data');
      return;
    }
    // if (this.userForm.value.UserType == "deliveryAgent") {
    //   this.service.loginUser(this.userForm.value).subscribe(
    //     (data) => {
    //       console.log(data);
    //       if (data["success"] == false) {
    //         this.toastr.warning(data["message"]);
    //       }
    //       else if (data["success"] == true) {
    //         this.toastr.success(data["message"]);
    //         this.userFormSubmitted = false;
    //         // this.userForm.reset();
    //         localStorage.setItem("access-token-livo", data["token"])
    //         localStorage.setItem("userType", "deliveryAgent")

    //         this.router.navigate(['/home'])
    //       }

    //     },
    //     (err) => {
    //       console.log(err);
    //       this.toastr.error(err);
    //     }
    //   );
    // }
    // else {

    this.service
      .loginUser(this.userForm.value, this.userForm.value.UserType)
      .subscribe(
        (data:any) => {
          // debugger
          console.log(data);
          if ((<any>data)['success'] == false) {
            this.toastr.warning((<any>data)['message']);
          }
          console.log(<any>data);
          if ((<any>data)['status'] == true) {
            console.log('test');
            this.toastr.success('Login Successful');
            this.userFormSubmitted = false;
            // this.userForm.reset();
            localStorage.setItem(
              'access-token-quickmint',
              (<any>data)['token']
            );
            localStorage.setItem('stripeCustomeToken',(<any>data)['data']['stripe']['customer_token']);
            localStorage.setItem('userType', this.userForm.value.UserType);
            localStorage.setItem('userId', (<any>data)['data']['_id']);
            localStorage.setItem(
              'UserFullName',
              (<any>data)['data']['UserFullName']
            );
            this.userType =this.userForm.value.UserType;

            this.service.saveLocalData('loginData', this.userForm.value);
            this.service.saveLocalData('userData', (<any>data)['data']);
            this.service.isLoggedIn = true;
            
            // this.header.changeMenu();
            // this.service.emit("login")
            this.commonService.publishSomeData('login');
            this.dialog.closeAll();
           // if (this.userForm.value.UserType == 1) {
             console.log('usertype',this.userType)
             if(this.userType =='1')
             {
              this.router.navigate(['provider-dashboard']);
            } else {
              this.router.navigate(['home']);
            }
          }
        },
        (err) => {
          console.log(err);
          this.toastr.error(err);
        }
      );
    // }
  }
  signInWithFB() {}
  signInWithGoogle() {}
  signInWithApple() {}
}
