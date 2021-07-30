import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderServiceBookDetailsComponent } from './provider-service-book-details.component';

const routes: Routes = [{ path: '', component: ProviderServiceBookDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderServiceBookDetailsRoutingModule { }
