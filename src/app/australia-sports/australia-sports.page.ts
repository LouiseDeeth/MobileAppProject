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
  selector: 'app-australia-sports',
  templateUrl: './australia-sports.page.html',
  styleUrls: ['./australia-sports.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabs, IonTabButton, IonTabBar, CommonModule, FormsModule, IonButtons, IonBackButton, IonButton, IonImg, RouterLinkWithHref, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle ]
})
export class AustraliaSportsPage implements OnInit {
  australiaSports:any =[];

  constructor(
    private router: Router,
    private dataService: DataService
  ) { 
    addIcons({homeOutline});
  }

  ngOnInit() {
    this.dataService.getAustraliaSportData().subscribe(
      (data) => {
        this.australiaSports = data.articles;
        console.log(this.australiaSports);
      },
      error => console.error('Error fetching Australian sports: ', error)
    );
  }

  async openBrowser(url: string) {
    if (!url) {
      console.error('No URL provided');
      return;
    }
    try {
      console.log('Opening URL:', url); 
      await Browser.open({ url });
    } catch (error) {
      console.error('Error opening the link:', error);
    }
  }
   
  goHome() {
    this.router.navigate(['/home']);  
  }
}
