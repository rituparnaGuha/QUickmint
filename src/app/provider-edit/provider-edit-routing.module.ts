import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderEditComponent } from './provider-edit.component';

const routes: Routes = [{ path: '', component: ProviderEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderEditRoutingModule { }
