import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerProfileComponent } from './trainer-profile.component';

const routes: Routes = [{ path: '', component: TrainerProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerProfileRoutingModule { }
