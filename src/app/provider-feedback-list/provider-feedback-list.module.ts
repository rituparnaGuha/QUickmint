import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { ProviderFeedbackListRoutingModule } from './provider-feedback-list-routing.module';
import { ProviderFeedbackListComponent } from './provider-feedback-list.component';


@NgModule({
  declarations: [ProviderFeedbackListComponent],
  imports: [
    CommonModule,
    ProviderFeedbackListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStarRatingModule
  ]
})
export class ProviderFeedbackListModule { }
