import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderMyAnalysisComponent } from './provider-my-analysis.component';

const routes: Routes = [{ path: '', component: ProviderMyAnalysisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderMyAnalysisRoutingModule { }
