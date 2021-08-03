import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderFeedbackListComponent } from './provider-feedback-list.component';

const routes: Routes = [
  { path: '', component: ProviderFeedbackListComponent },
 // { path: 'provider-edit/:serviceId', loadChildren: () => import('../provider-edit/provider-edit.module').then(m => m.ProviderEditModule) },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderFeedbackListRoutingModule { }
