import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCategoryClassAComponent } from './sub-category-classA.component';

const routes: Routes = [{ path: '', component: SubCategoryClassAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoryClassARoutingModule { }
