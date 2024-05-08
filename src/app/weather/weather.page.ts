import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonItem, IonLabel, IonList, IonRadio, IonButtons, IonRadioGroup } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router, RouterModule } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButton, IonItem, IonLabel, IonList, IonRadio, IonButtons, IonRadioGroup, RouterModule ]
})
export class WeatherPage implements OnInit {
  myWeather: string = "";
  coordinates: any = ""; 
  lat: string = ""; 
  long: String = "";

constructor(private storage: Storage, private router: Router, private dataService: DataService) { }
ngOnInit() {
}

async ionViewWillEnter() {
  await this.storage.create();
  this.myWeather = await this.storage.get('weather');
}

async getCurrentLocation() {
  const coordinates = await Geolocation.getCurrentPosition();
  console.log('Current position:', coordinates.coords.latitude, coordinates.coords.longitude);
  return coordinates.coords;
}

async showWeather() {
  try {
    const coords = await this.getCurrentLocation();
    this.dataService.getWeatherByLocation(coords.latitude, coords.longitude).subscribe(data => {
      console.log('Weather data:', data);
    });
  } catch (error) {
    console.error('Error getting location/weather:', error);
  }
}

//save which city to view on homepage
async saveCity() {
  await this.storage.set('weather', this.myWeather)
  .then(
    ()=>{
      this.router.navigate(['/home'])
    })
  .catch();
  }
}
