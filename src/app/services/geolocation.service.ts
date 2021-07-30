import { Injectable } from '@angular/core';
import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core'; 
import { Observable } from 'rxjs';
declare var google:any;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getPosition() {
    return navigator.geolocation.getCurrentPosition(
      coord => {
        console.log("success");
        console.log(coord);
      },
      err => {
        console.log(err);
      },
      { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true }
    );
  }

}
