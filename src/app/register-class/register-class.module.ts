import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterClassRoutingModule } from './register-class-routing.module';
import { RegisterClassComponent } from './register-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FilterModule } from '../component/filter/filter.module';
import {CheckboxGroupComponent} from './checkbox-group.component';
import {CheckboxComponent} from './checkbox.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [RegisterClassComponent, CheckboxGroupComponent, CheckboxComponent],
  imports: [
    CommonModule,
    RegisterClassRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    FilterModule,
    MatSelectModule
  ],
})
export class RegisterClassModule {}
