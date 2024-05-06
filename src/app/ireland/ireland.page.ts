import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonBackButton, IonButtons, IonTabs, IonIcon, IonTabBar } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-ireland',
  templateUrl: './ireland.page.html',
  styleUrls: ['./ireland.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, RouterModule, IonButtons, IonBackButton, IonTabs, IonIcon, IonTabBar  ],
})
export class IrelandPage implements OnInit {
  constructor(private router:Router) {
    addIcons({ 'home-outline': homeOutline });
  }

  ngOnInit(): void {
  }
}