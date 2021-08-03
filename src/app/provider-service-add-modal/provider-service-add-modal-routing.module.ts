import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderServiceAddModalComponent } from './provider-service-add-modal.component';

const routes: Routes = [{ path: '', component: ProviderServiceAddModalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderServiceAddModalRoutingModule { }
