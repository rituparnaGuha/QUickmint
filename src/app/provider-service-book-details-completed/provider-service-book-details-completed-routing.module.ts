import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderServiceBookDetailsCompletedComponent } from './provider-service-book-details-completed.component';

const routes: Routes = [{ path: '', component: ProviderServiceBookDetailsCompletedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderServiceBookDetailsCompletedRoutingModule { }
