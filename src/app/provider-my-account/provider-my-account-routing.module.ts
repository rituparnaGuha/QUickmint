import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderMyAccountComponent } from './provider-my-account.component';

const routes: Routes = [{ path: '', component: ProviderMyAccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderMyAccountRoutingModule { }
