import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceEditViewRoutingModule } from './service-edit-view-routing.module';
import { ServiceEditViewComponent } from './service-edit-view.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


@NgModule({
  declarations: [ServiceEditViewComponent],
  imports: [
    CommonModule,
    ServiceEditViewRoutingModule,
    NgxMaterialTimepickerModule
  ]
})
export class ServiceEditViewModule { }
