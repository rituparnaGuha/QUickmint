import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewImageComponent } from './view-Image.component';

const routes: Routes = [{ path: '', component: ViewImageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewImageRoutingModule { }
