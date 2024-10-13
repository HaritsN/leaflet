import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}

  // Move the map initialization to ionViewDidEnter
  ionViewDidEnter() {
    // Initialize the map and set the view
    this.map = L.map('mapId').setView([51.505, -0.09], 10);

    // Define the tile layers (basemaps)
    const osmBaseMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const satelliteBaseMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
    });

    // Add the default OSM basemap to the map
    osmBaseMap.addTo(this.map);

    // Add a marker to the map
    var customIcon = L.icon({
      iconUrl: 'assets/icon/favicon.png', // Ganti dengan path gambar Anda
      iconSize: [38, 38], // Ukuran ikon
      iconAnchor: [22, 94], // Titik yang menjadi anchor ikon
      popupAnchor: [-3, -76] // Titik popup
  });

 // Tambahkan marker dengan ikon kustom
L.marker([51.505, -0.09], { icon: customIcon }).addTo(this.map)
    .bindPopup(`
        <div>
            <p>Hai Semuanya!</p>
            <img src="assets/icon/favicon.png" alt="Foto Toko" style="width:150px;height:auto;margin-top:5px;">
        </div>
    `)
    .openPopup();

    // Define basemap options
    const baseMaps = {
      'OpenStreetMap': osmBaseMap,
      'Satellite': satelliteBaseMap
    };

    // Add a layer control to switch between basemaps
    L.control.layers(baseMaps).addTo(this.map);
  }
}
