import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonBackButton, IonButtons, IonIcon, IonTabs, IonTabButton, IonTabBar } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { homeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-australia',
  templateUrl: './australia.page.html',
  styleUrls: ['./australia.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonBackButton, IonIcon, IonTabs, IonTabButton, IonTabBar, RouterModule ],
})
export class AustraliaPage implements OnInit {
  constructor(private router: Router) { 
    addIcons({ 'home-outline': homeOutline });
  }

  ngOnInit(): void {
  }
}

