import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlotsForCalendarRoutingModule } from './slots-for-calendar-routing.module';
import { SlotsForCalendarComponent } from './slots-for-calendar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [SlotsForCalendarComponent],
  imports: [
    CommonModule,
    SlotsForCalendarRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SlotsForCalendarModule { }
