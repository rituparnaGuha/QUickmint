import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProviderFaqListRoutingModule } from './provider-faq-list-routing.module';
import { ProviderFaqListComponent } from './provider-faq-list.component';


@NgModule({
  declarations: [ProviderFaqListComponent],
  imports: [
    CommonModule,
    ProviderFaqListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProviderFaqListModule { }
