import { Component, OnInit } from '@angular/core';
import { IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonMenuButton, IonButton } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { RouterLinkWithHref } from '@angular/router';
import { DataService} from '../Services/data.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  providers: [DataService, DatePipe],
  imports: [IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, RouterModule, IonButtons, IonMenuButton, IonButton, RouterLinkWithHref],
})

export class HomePage implements OnInit{
    myWeather: string = "";
    weatherData: any;
    currentTime: string = "";
 
  constructor(private router: Router, private storage: Storage, private dataService: DataService, private datePipe: DatePipe) {} 

    async ngOnInit() {
      await this.storage.create();
      this.updateWeather();
      this.updateTime();
      setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
      const formattedDate = this.datePipe.transform(new Date(), 'EEEE  dd MMM yyyy HH:mm:ss');
      this.currentTime = formattedDate ? formattedDate : '';  
    }
  
    async ionViewWillEnter() {
      await this.updateWeather();
    }
  
    async updateWeather() {
      this.myWeather = await this.storage.get('weather');
      this.loadWeather();
    }

    async getMyLocation() {
      const coordinates = await Geolocation.getCurrentPosition();
      return coordinates.coords;
    }

    loadWeather() {
      switch (this.myWeather) {
        case 'Galway':
          this.dataService.getGalwayWeatherData().subscribe(data => {
            console.log('Weather data for Galway:', data); 
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            this.weatherData = {
              description: data.weather[0].description,
              temp: (data.main.temp - 273.15).toFixed(1),
              icon: iconUrl 
            };
          });
          break;
        case 'Dublin':
          this.dataService.getDublinWeatherData().subscribe(data => {
            console.log('Weather data for Dublin:', data); 
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            this.weatherData = {
              description: data.weather[0].description,
              temp: (data.main.temp - 273.15).toFixed(1),
              icon: iconUrl 
            };
          });
          break;
        case 'Cork':
          this.dataService.getCorkWeatherData().subscribe(data => {
            console.log('Weather data for Cork:', data); 
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            this.weatherData = {
              description: data.weather[0].description,
              temp: (data.main.temp - 273.15).toFixed(1),
              icon: iconUrl 
            };
          });
          break;
        case 'Brisbane':
          this.dataService.getBrisbaneWeatherData().subscribe(data => {
            console.log('Weather data for Brisbane:', data); 
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            this.weatherData = {
              description: data.weather[0].description,
              temp: (data.main.temp - 273.15).toFixed(1),
              icon: iconUrl 
            };
          });
          break;
        case 'Sydney':
          this.dataService.getSydneyWeatherData().subscribe(data => {
            console.log('Weather data for Sydney:', data); 
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            this.weatherData = {
              description: data.weather[0].description,
              temp: (data.main.temp - 273.15).toFixed(1),
              icon: iconUrl 
            };
          });
          break;
        case 'Perth':
          this.dataService.getPerthWeatherData().subscribe(data => {
            console.log('Weather data for Perth:', data); 
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            this.weatherData = {
              description: data.weather[0].description,
              temp: (data.main.temp - 273.15).toFixed(1),
              icon: iconUrl 
            };
          });
          break;
        case 'Melbourne':
          this.dataService.getMelbourneWeatherData().subscribe(data => {
            console.log('Weather data for Melbourne:', data); 
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            this.weatherData = {
              description: data.weather[0].description,
              temp: (data.main.temp - 273.15).toFixed(1),
              icon: iconUrl 
            };
          });
          break;
        case 'Darwin':
          this.dataService.getDarwinWeatherData().subscribe(data => {
            console.log('Weather data for Darwin:', data); 
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            this.weatherData = {
              description: data.weather[0].description,
              temp: (data.main.temp - 273.15).toFixed(1),
              icon: iconUrl 
            };
          });
          break;
        case 'My Location':
          this.getMyLocation().then(coords => {
            this.dataService.getWeatherByLocation(coords.latitude, coords.longitude).subscribe(data => {
              console.log('Weather data for My Location:', data); 
              const iconCode = data.weather[0].icon;
                    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
                    this.weatherData = {
                      description: data.weather[0].description,
                      temp: (data.main.temp - 273.15).toFixed(1),
                      icon: iconUrl 
                    };
            });
          }).catch(err => {
            console.error('Error fetching location:', err);
          });
          break;
              }
            }
          }
