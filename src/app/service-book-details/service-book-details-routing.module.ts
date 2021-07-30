import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceBookDetailsComponent } from './service-book-details.component';

const routes: Routes = [{ path: '', component: ServiceBookDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceBookDetailsRoutingModule { }
