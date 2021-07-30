import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceEditViewComponent } from './service-edit-view.component';

const routes: Routes = [{ path: '', component: ServiceEditViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceEditViewRoutingModule { }
