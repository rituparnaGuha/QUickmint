import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './service-list.component';

const routes: Routes = [
  { path: '', component: ServiceListComponent },
  { path: 'provider-edit/:serviceId', loadChildren: () => import('../provider-edit/provider-edit.module').then(m => m.ProviderEditModule) },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceListRoutingModule { }
