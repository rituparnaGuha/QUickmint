import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClassListComponent } from './register-class-list.component';

const routes: Routes = [{ path: '', component: RegisterClassListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterClassListRoutingModule { }
