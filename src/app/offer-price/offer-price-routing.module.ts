import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferPriceComponent } from './offer-price.component';

const routes: Routes = [{ path: '', component: OfferPriceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferPriceRoutingModule { }
