import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonItem, IonLabel, IonList, IonRadio, IonButtons, IonRadioGroup } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButton, IonItem, IonLabel, IonList, IonRadio, IonButtons, IonRadioGroup, RouterModule ]
})
export class WeatherPage implements OnInit {
  myWeather: string = "";
constructor(private storage: Storage, private router: Router) { }
ngOnInit() {
}

async ionViewWillEnter() {
  await this.storage.create();
  this.myWeather = await this.storage.get('weather');
}
async saveCity() {
  await this.storage.set('weather', this.myWeather)
  .then(
    ()=>{
      this.router.navigate(['/home'])
    })
  .catch();
  }
}
