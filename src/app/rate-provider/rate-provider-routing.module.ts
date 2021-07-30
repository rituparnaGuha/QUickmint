import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RateProviderComponent } from './rate-provider.component';

const routes: Routes = [{ path: '', component: RateProviderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RateProviderRoutingModule { }
