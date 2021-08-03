import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDetailsRoutingModule } from './service-details-routing.module';
import { ServiceDetailsComponent } from './service-details.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';


@NgModule({
  declarations: [ServiceDetailsComponent],
  imports: [
    CommonModule,
    ServiceDetailsRoutingModule,
    FormsModule,
    NgxStarRatingModule
  ]
})
export class ServiceDetailsModule { }
