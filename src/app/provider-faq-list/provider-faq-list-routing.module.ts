import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderFaqListComponent } from './provider-faq-list.component';

const routes: Routes = [
  { path: '', component: ProviderFaqListComponent },
 // { path: 'provider-edit/:serviceId', loadChildren: () => import('../provider-edit/provider-edit.module').then(m => m.ProviderEditModule) },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderFaqListRoutingModule { }
