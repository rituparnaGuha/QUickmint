import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

import { FormBuilder, Validators, FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { WebserviceService } from '../services/webservice.service';

import { ToastrService } from 'ngx-toastr';
// import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  fieldTextType: boolean = false;

  constructor(public dialog: MatDialogRef<ForgotPasswordComponent>,
    private formBuilder: FormBuilder,
    private service: WebserviceService,
    private toastr: ToastrService,
    private router: Router,
  ) { }


  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  // openRegisterDialog() {
  //   const dialogRef = this.dialog.open(RegisterComponent, { width: '950px', });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result`);
  //   });
  // }
  // openLoginDialog() {
  //   const dialogRef = this.dialog.open(LoginComponent, { width: '950px', });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result`);
  //   });
  // }
  userForm: any;
  userFormSubmitted: boolean = false;



  ngOnInit() {
    // debugger
    this.userForm = this.formBuilder.group({
      UserEmail: ["", [Validators.required, Validators.email]],
      // UserPassword: ["", [Validators.required]],
      UserType: ["2"]
    });
  }

  get f() {
    return this.userForm.controls;
  }
  onSubmit() {
    console.log(this.userForm.value)
    if (!this.userForm.valid) {
      this.userFormSubmitted = true;
      this.toastr.warning("Please fill all required data");
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
    this.service.forgotPassword(this.userForm.value).subscribe(
      (data) => {
        console.log(data);
        if ((<any>data)["success"] == false) {
          this.toastr.warning((<any>data)["message"]);
        }
        else if ((<any>data)["success"] == true) {
        this.dialog.close()

          this.toastr.success((<any>data)["message"]);
          this.userFormSubmitted = false;
          // this.userForm.reset();
          // localStorage.setItem("access-token-quickmint", (<any>data)["token"])
          // localStorage.setItem("userType", this.userForm.value.UserType)
          // this.service.isLoggedIn = true;
          // this.header.changeMenu();
          this.router.navigate(['/home'])
        }

      },
      (err) => {
        console.log(err);
        this.toastr.error(err);
      }
    );
    // }
  }
}
