import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewImageRoutingModule } from './view-Image-routing.module';
import { ViewImageComponent } from './view-Image.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ViewImageComponent],
  imports: [
    CommonModule,
    ViewImageRoutingModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewImageModule { }
