import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PublicJobListModule } from '../public-job-list/public-job-list.module';
import { PublicJobListComponent } from '../public-job-list/public-job-list.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
//import { RatingModule } from 'ng-starrating';

//import { NgxMaterialRatingModule } from 'ngx-material-rating';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    PublicJobListModule,
    CarouselModule,
    NgxStarRatingModule
    //NgxMaterialRatingModule
   //RatingModule
    // PublicJobListComponent
  ]
})
export class HomeModule { }
