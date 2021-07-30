import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferPriceRoutingModule } from './offer-price-routing.module';
import { OfferPriceComponent } from './offer-price.component';


@NgModule({
  declarations: [OfferPriceComponent],
  imports: [
    CommonModule,
    OfferPriceRoutingModule
  ]
})
export class OfferPriceModule { }
