import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingCheckComponent } from './routing-check.component';

const routes: Routes = [{ path: '', component: RoutingCheckComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingCheckRoutingModule { }
