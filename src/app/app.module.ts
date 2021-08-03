import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';  
import {
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';

// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ServiceBookingListComponent } from './service-provider/service-booking-list/service-booking-list.component';
import { ServiceProviderDashboardComponent } from './service-provider/service-provider-dashboard/service-provider-dashboard.component';
import { ServiceBookingListModule } from './service-provider/service-booking-list/service-booking-list.module';
import { ServiceProviderDashboardModule } from './service-provider/service-provider-dashboard/service-provider-dashboard.module';
import { RoutingCheckComponent } from './routing-check/routing-check.component';
import { RoutingCheckModule } from './routing-check/routing-check.module';
import { SearchFilterPipe } from './search-filter.pipe';
import { JitsiComponent } from './jitsi/jitsi.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClassDetailsPopupComponent } from './class-details-popup/class-details-popup.component';
import { CallPopupComponent } from './call-popup/call-popup.component';
import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { CmsPagesComponent } from './cms-pages/cms-pages.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ClassDetailsComponent } from './class-details/class-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ServiceBookingListComponent,
    ServiceProviderDashboardComponent,
    RoutingCheckComponent,
    SearchFilterPipe,
    JitsiComponent,
    
    ClassDetailsPopupComponent,
    CallPopupComponent,
    ClassDetailsComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBjhOO660KV12k_YRTz2quLsk6IwM4WfT4',
      libraries: ['places'],
    }),
    MatGoogleMapsAutocompleteModule,
    BrowserModule,
    OwlModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    
    // MatDialogModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    }),
    ServiceBookingListModule,
    ServiceProviderDashboardModule,
    RoutingCheckModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
