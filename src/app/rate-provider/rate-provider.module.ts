import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RateProviderRoutingModule } from './rate-provider-routing.module';
import { RateProviderComponent } from './rate-provider.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [RateProviderComponent],
  imports: [
    CommonModule,
    RateProviderRoutingModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RateProviderModule { }
