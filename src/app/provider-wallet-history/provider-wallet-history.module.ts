import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderWalletHistoryRoutingModule } from './provider-wallet-history-routing.module';
import { ProviderWalletHistoryComponent } from './provider-wallet-history.component';


@NgModule({
  declarations: [ProviderWalletHistoryComponent],
  imports: [
    CommonModule,
    ProviderWalletHistoryRoutingModule
  ]
})
export class ProviderWalletHistoryModule { }
