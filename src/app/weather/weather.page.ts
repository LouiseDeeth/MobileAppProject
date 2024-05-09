import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonItem, IonLabel, IonList, IonRadio, IonButtons, IonRadioGroup, IonTabs, IonIcon, IonTabBar, IonImg  } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router, RouterModule } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { DataService } from '../Services/data.service';
import { addIcons } from 'ionicons';
import { homeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButton, IonItem, IonLabel, IonList, IonRadio, IonButtons, IonRadioGroup, RouterModule, IonIcon, IonTabs, IonTabBar, IonImg ]
})
export class WeatherPage implements OnInit {
  myWeather: string = "";
  coordinates: any = ""; 
  lat: string = ""; 
  long: String = "";

constructor(private storage: Storage, private router: Router, private dataService: DataService) {
  addIcons({ 'home-outline': homeOutline });
}

ngOnInit(): void {
}

//store the weather - Galway is default if no stored weather
async ionViewWillEnter() {
  await this.storage.create();
  const storedWeather = await this.storage.get('weather');
  if (storedWeather) {
    this.myWeather = storedWeather;
  } else {
    this.myWeather = 'Galway'; 
  }
}

//get current location using geolocation
async getCurrentLocation() {
  const coordinates = await Geolocation.getCurrentPosition();
  console.log('Current position:', coordinates.coords.latitude, coordinates.coords.longitude);
  return coordinates.coords;
}

//show the weather by location
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
