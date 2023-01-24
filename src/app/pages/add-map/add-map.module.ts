import { NgModule } from '@angular/core';
import { AddMapPage } from './add-map.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { AddMapPageRoutingModule } from './add-map-routing.module';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [AddMapPage],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    HttpClientModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
    AddMapPageRoutingModule,
  ],
})
export class AddMapPageModule {}
