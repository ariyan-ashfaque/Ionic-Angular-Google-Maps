import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mapUrl: string = 'https://maps.googleapis.com/maps/api/js?key=';
  constructor(private router: Router, private meta: Meta) {
    this.router.navigate(['/dashboard']);

    this.meta.addTag({
      id: 'googleMap',
      src: this.mapUrl + environment.browserKey,
    });
  }
}
