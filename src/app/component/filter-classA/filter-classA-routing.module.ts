import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterClassAComponent } from './filter-classA.component';

const routes: Routes = [{ path: '', component: FilterClassAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterClassARoutingModule { }
