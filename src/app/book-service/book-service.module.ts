import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookServiceRoutingModule } from './book-service-routing.module';
import { BookServiceComponent } from './book-service.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [BookServiceComponent],
  imports: [
    CommonModule,
    BookServiceRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class BookServiceModule { }
