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
  selector: 'app-australia-news',
  templateUrl: './australia-news.page.html',
  styleUrls: ['./australia-news.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabs, IonTabButton, IonTabBar, CommonModule, FormsModule, IonButtons, IonBackButton, IonButton, IonImg, RouterLinkWithHref, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle ]
  })
export class AustraliaNewsPage implements OnInit {
  australiaNews:any =[];

  constructor(
    private router: Router,
    private dataService: DataService
  ) { 
    addIcons({homeOutline});
  }

  ngOnInit(): void {
    this.dataService.getAustraliaNewsData().subscribe({
      next: (data) => {
        this.australiaNews = data.articles;
        console.log(this.australiaNews);
      },
      error: (error) => console.error('Error fetching Australian news: ', error)
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
