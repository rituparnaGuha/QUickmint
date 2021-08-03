import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteredCustomerListComponent } from './registered-customer-list.component';

const routes: Routes = [{ path: '', component: RegisteredCustomerListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisteredCustomerListRoutingModule { }
