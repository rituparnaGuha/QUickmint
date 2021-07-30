import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewClassComponent } from './view-Class.component';

const routes: Routes = [{ path: '', component: ViewClassComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewClassRoutingModule { }
