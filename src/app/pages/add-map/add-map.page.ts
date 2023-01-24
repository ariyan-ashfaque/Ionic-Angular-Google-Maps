import { Observable, of } from 'rxjs';
import { Meta } from '@angular/platform-browser';
import { catchError, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-map',
  templateUrl: './add-map.page.html',
  styleUrls: ['./add-map.page.scss'],
})
export class AddMapPage implements OnInit {
  options: google.maps.MapOptions = {
    zoom: 16,
    mapTypeId: 'satellite',
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    // center: {lat: 40, lng: -20},
  };
  apiLoaded: Observable<boolean>;
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 23.842378987514717, lng: 90.2537879201278 },
  ];
  center: google.maps.LatLngLiteral = {
    lat: 23.842378987514717,
    lng: 90.2537879201278,
  };
  markerOptions: google.maps.MarkerOptions = { draggable: true };
  mapsUrl: string = 'https://maps.googleapis.com/maps/api/js?key=';

  constructor(httpClient: HttpClient, private meta: Meta) {
    let script = this.meta.getTag('id=googleMap');

    console.log('=======================');
    console.log(script.id);
    console.log('=======================');

    if (script.id) {
      this.apiLoaded = httpClient
        .jsonp(this.mapsUrl + environment.browserKey, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false))
        );
    }
  }

  async ngOnInit() {
    await this.getCurrentLocation();
  }

  getCurrentLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition({
      timeout: 50000,
      enableHighAccuracy: true,
    });

    this.center = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude,
    };
  };

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());

    console.log('=======================');
    console.log(this.markerPositions);
    console.log('=======================');
  }
}
