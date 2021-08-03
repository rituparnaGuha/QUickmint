import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderMyAccountRoutingModule } from './provider-my-account-routing.module';
import { ProviderMyAccountComponent } from './provider-my-account.component';


@NgModule({
  declarations: [ProviderMyAccountComponent],
  imports: [
    CommonModule,
    ProviderMyAccountRoutingModule
  ]
})
export class ProviderMyAccountModule { }
