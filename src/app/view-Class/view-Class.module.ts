import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewClassRoutingModule } from './view-Class-routing.module';
import { ViewClassComponent } from './view-Class.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ViewClassComponent],
  imports: [
    CommonModule,
    ViewClassRoutingModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewClassModule { }
