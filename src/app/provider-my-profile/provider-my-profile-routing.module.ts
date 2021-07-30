import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderMyProfileComponent } from './provider-my-profile.component';

const routes: Routes = [{ path: '', component: ProviderMyProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderMyProfileRoutingModule { }
