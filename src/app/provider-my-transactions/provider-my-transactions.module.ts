import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderMyTransactionsRoutingModule } from './provider-my-transactions-routing.module';
import { ProviderMyTransactionsComponent } from './provider-my-transactions.component';


@NgModule({
  declarations: [ProviderMyTransactionsComponent],
  imports: [
    CommonModule,
    ProviderMyTransactionsRoutingModule
  ]
})
export class ProviderMyTransactionsModule { }
