import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCategoryClassRoutingModule } from './sub-category-class-routing.module';
import { SubCategoryClassComponent } from './sub-category-class.component';
import { FilterClassModule } from '../component/filter-class/filter-class.module';
//import { FilterClassAModule } from '../component/filter-classA/filter-classA.module';
//import { FilterClassA } from '../component/filter-classA/filter-classA.component';


@NgModule({
  declarations: [SubCategoryClassComponent],
  imports: [
    CommonModule,
    SubCategoryClassRoutingModule,
    FilterClassModule,
    //FilterClassAModule
  ]
})
export class SubCategoryClassModule { }
