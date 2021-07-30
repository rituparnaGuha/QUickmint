import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MyProfileRoutingModule
  ]
})
export class MyProfileModule { }
