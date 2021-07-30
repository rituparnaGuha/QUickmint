import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderMyTransactionsComponent } from './provider-my-transactions.component';

const routes: Routes = [{ path: '', component: ProviderMyTransactionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderMyTransactionsRoutingModule { }
