import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsPagesComponent } from './cms-pages.component';

const routes: Routes = [{ path: '', component: CmsPagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsPagesRoutingModule { }