import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterClassListRoutingModule } from './register-class-list-routing.module';
import { RegisterClassListComponent } from './register-class-list.component';
import { FilterClassModule } from '../component/filter-class/filter-class.module';

@NgModule({
  declarations: [RegisterClassListComponent],
  imports: [CommonModule, RegisterClassListRoutingModule, FilterClassModule],
})
export class RegisterClassListModule {}
