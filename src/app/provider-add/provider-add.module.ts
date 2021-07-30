import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderAddRoutingModule } from './provider-add-routing.module';
import { ProviderAddComponent } from './provider-add.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProviderAddComponent],
  imports: [
    CommonModule,
    ProviderAddRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    FormsModule, 
    ReactiveFormsModule,
    NgxMaterialTimepickerModule
  ]
})
export class ProviderAddModule { }
