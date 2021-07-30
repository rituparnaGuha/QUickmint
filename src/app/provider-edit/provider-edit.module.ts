import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderEditRoutingModule } from './provider-edit-routing.module';
import { ProviderEditComponent } from './provider-edit.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProviderEditComponent],
  imports: [
    CommonModule,
    ProviderEditRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    FormsModule, 
    ReactiveFormsModule,
    NgxMaterialTimepickerModule
  ]
})
export class ProviderEditModule { }
