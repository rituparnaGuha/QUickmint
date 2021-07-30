import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterClassARoutingModule } from './filter-classA-routing.module';
import { FilterClassAComponent } from './filter-classA.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FilterClassAComponent],
  imports: [CommonModule, FilterClassARoutingModule, FormsModule],
  exports: [FilterClassAComponent],
})
export class FilterClassAModule {}