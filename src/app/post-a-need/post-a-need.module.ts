import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostANeedRoutingModule } from './post-a-need-routing.module';
import { PostANeedComponent } from './post-a-need.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [PostANeedComponent],
  imports: [
    MatGoogleMapsAutocompleteModule,
    MatFormFieldModule,
    CommonModule,
    PostANeedRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBjhOO660KV12k_YRTz2quLsk6IwM4WfT4',
      libraries: ['places'],
    }),
  ],
  exports: [CommonModule],
})
export class PostANeedModule {}
