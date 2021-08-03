import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterClassRoutingModule } from './filter-class-routing.module';
import { FilterClassComponent } from './filter-class.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FilterClassComponent],
  imports: [CommonModule, FilterClassRoutingModule, FormsModule],
  exports: [FilterClassComponent],
})
export class FilterClassModule {}
