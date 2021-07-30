import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderWalletHistoryComponent } from './provider-wallet-history.component';

const routes: Routes = [{ path: '', component: ProviderWalletHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderWalletHistoryRoutingModule { }
