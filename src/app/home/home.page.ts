import { Component, OnInit } from '@angular/core';
import { IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonMenuButton, IonButton } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { RouterLinkWithHref } from '@angular/router';
import { DataService} from '../Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  providers: [DataService],
  imports: [IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, RouterModule, IonButtons, IonMenuButton, IonButton, RouterLinkWithHref ],
})

export class HomePage implements OnInit{
  constructor(private router:Router, 
    private storage: Storage,
    private dataService: DataService) {} 
    
    myWeather: string = "";
    weatherData: any;
    weather: any = [];

    async ngOnInit() {
      await this.storage.create();
      this.myWeather = await this.storage.get('weather');
      this.loadWeather();
    }
  
    loadWeather() {
      switch (this.myWeather) {
        case 'Galway':
          this.dataService.getGalwayWeatherData().subscribe(data => {
            console.log('Weather data for Galway:', data); 
            this.weatherData  = data.weather[0];
          });
          break;
        case 'Dublin':
          this.dataService.getDublinWeatherData().subscribe(data => {
            console.log('Weather data for Dublin:', data); 
            this.weatherData  = data.weather[0];
          });
          break;
        case 'Brisbane':
          this.dataService.getBrisbaneWeatherData().subscribe(data => {
            console.log('Weather data for Brisbane:', data); 
            this.weatherData  = data.weather[0];
          });
          break;
        case 'Sydney':
          this.dataService.getSydneyWeatherData().subscribe(data => {
            console.log('Weather data for Sydney:', data); 
            this.weatherData  = data.weather[0];
          });
          break;
        case 'Perth':
          this.dataService.getPerthWeatherData().subscribe(data => {
            console.log('Weather data for Perth:', data); 
            this.weatherData  = data.weather[0];
          });
        break;
      }
    }
  }
