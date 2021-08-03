import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDetailsComponent } from './service-details.component';

const routes: Routes = [{ path: '', component: ServiceDetailsComponent },
{path:'rate-provider',loadChildren:()=>import('../rate-provider/rate-provider.module').then(m=>m.RateProviderModule)},
{path:'view-image',loadChildren:()=>import('../view-Image/view-Image.module').then(m=>m.ViewImageModule)},
{path:'view-Class',loadChildren:()=>import('../view-Class/view-Class.module').then(m=>m.ViewClassModule)}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDetailsRoutingModule { }
