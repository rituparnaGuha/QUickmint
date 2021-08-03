import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupDetailsRoutingModule } from './popup-details-routing.module';
import { PopupDetailsComponent } from './popup-details.component';


@NgModule({
  declarations: [PopupDetailsComponent],
  imports: [
    CommonModule,
    PopupDetailsRoutingModule
  ]
})
export class PopupDetailsModule { }
