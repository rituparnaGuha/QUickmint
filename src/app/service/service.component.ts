import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  @ViewChild('map') mapElement: ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
    var mapOptions= {
      center: {
        lat: 43.64344769999999,
        lng: -79.380939
      },
      disableDefaultUI: true,
      zoom: 20,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    
    var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions);
    var	latLng = new google.maps.LatLng(43.64344769999999, -79.380939);
    console.log('latlng', latLng);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: 'Andraw',
      icon: 'assets/images/location-icon.png',
    });
    
  }
 
}
