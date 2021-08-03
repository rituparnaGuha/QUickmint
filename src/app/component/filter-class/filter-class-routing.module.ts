import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterClassComponent } from './filter-class.component';

const routes: Routes = [{ path: '', component: FilterClassComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterClassRoutingModule { }
