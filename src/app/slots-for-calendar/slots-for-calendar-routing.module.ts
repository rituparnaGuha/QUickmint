import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlotsForCalendarComponent } from './slots-for-calendar.component';

const routes: Routes = [{ path: '', component: SlotsForCalendarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlotsForCalendarRoutingModule { }
