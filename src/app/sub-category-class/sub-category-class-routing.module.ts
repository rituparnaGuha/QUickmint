import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCategoryClassComponent } from './sub-category-class.component';

const routes: Routes = [{ path: '', component: SubCategoryClassComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoryClassRoutingModule { }
