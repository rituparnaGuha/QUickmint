import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderMyAnalysisRoutingModule } from './provider-my-analysis-routing.module';
import { ProviderMyAnalysisComponent } from './provider-my-analysis.component';


@NgModule({
  declarations: [ProviderMyAnalysisComponent],
  imports: [
    CommonModule,
    ProviderMyAnalysisRoutingModule
  ]
})
export class ProviderMyAnalysisModule { }
