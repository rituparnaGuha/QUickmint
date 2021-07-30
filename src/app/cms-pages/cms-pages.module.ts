import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CmsPagesComponent} from './cms-pages.component';
import {CmsPagesRoutingModule } from './cms-pages-routing.module';



@NgModule({
  declarations: [CmsPagesComponent],
  imports: [
    CommonModule,
    CmsPagesRoutingModule
  ]
})
export class CmsPagesModule { }
