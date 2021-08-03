import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderAddComponent } from './provider-add.component';

const routes: Routes = [{ path: '', component: ProviderAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderAddRoutingModule { }
