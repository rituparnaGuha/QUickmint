import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule, MatDialogModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ForgotPasswordModule { }
