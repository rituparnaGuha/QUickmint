import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostANeedComponent } from './post-a-need.component';

const routes: Routes = [{ path: '', component: PostANeedComponent }];

@NgModule({
  imports: [MatGoogleMapsAutocompleteModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostANeedRoutingModule {}
