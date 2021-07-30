import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEventRoutingModule } from './create-event-routing.module';
import { CreateEventComponent } from './create-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


@NgModule({
  declarations: [CreateEventComponent],
  imports: [
    CommonModule,
    CreateEventRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule, FormsModule, ReactiveFormsModule,
    NgxMaterialTimepickerModule
  ]
})
export class CreateEventModule { }
