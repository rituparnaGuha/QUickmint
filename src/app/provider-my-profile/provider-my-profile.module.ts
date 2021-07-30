import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderMyProfileRoutingModule } from './provider-my-profile-routing.module';
import { ProviderMyProfileComponent } from './provider-my-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProviderMyProfileComponent],
  imports: [
    CommonModule,
    ProviderMyProfileRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ProviderMyProfileModule { }
