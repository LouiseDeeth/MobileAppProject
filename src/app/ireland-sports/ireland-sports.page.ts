import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabs, IonTabButton, IonTabBar, IonButtons, IonBackButton, IonButton, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { Router, RouterLinkWithHref } from '@angular/router';
import { homeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { DataService } from '../Services/data.service';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-ireland-sports',
  templateUrl: './ireland-sports.page.html',
  styleUrls: ['./ireland-sports.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabs, IonTabButton, IonTabBar, CommonModule, FormsModule, IonButtons, IonBackButton, IonButton, IonImg, RouterLinkWithHref, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle ]
})
export class IrelandSportsPage implements OnInit {
  irelandSports:any =[];

  constructor(
    private router: Router,
    private dataService: DataService
  ) { 
    addIcons({homeOutline});
  }

  ngOnInit(): void {
    this.dataService.getIrishSportData().subscribe({
      next: (data) => {
        this.irelandSports = data.articles;
        console.log(this.irelandSports);
      },
      error: (error) => console.error('Error fetching Irish sports: ', error)
    });
  }

  async openBrowser(url: string): Promise<void> {
    console.log('Attempting to open URL:', url);  
    if (!url) {
      console.error('No URL provided');
      return;
    }
    try {
      console.log('Opening URL:', url); 
      await Browser.open({ url });
      console.log('Browser opened successfully');  
    } catch (error) {
      console.error('Error opening the link:', error);
    }
  }   
}
