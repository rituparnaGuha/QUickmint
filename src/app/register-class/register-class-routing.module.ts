import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClassComponent } from './register-class.component';

const routes: Routes = [{ path: '', component: RegisterClassComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterClassRoutingModule { }
