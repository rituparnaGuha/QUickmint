import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicJobListComponent } from './public-job-list.component';

const routes: Routes = [{ path: '', component: PublicJobListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicJobListRoutingModule { }
