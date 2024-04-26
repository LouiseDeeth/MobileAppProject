import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabs, IonTabButton, IonTabBar, IonButtons, IonBackButton, IonButton , IonImg} from '@ionic/angular/standalone';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import {homeOutline} from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-ireland-sports',
  templateUrl: './ireland-sports.page.html',
  styleUrls: ['./ireland-sports.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabs, IonTabButton, IonTabBar, CommonModule, FormsModule, IonButtons, IonBackButton, IonButton, IonImg, RouterLinkWithHref]
})
export class IrelandSportsPage implements OnInit {

  constructor(private router: Router)  { 
    addIcons({homeOutline});
  }

  ngOnInit() {
  }
  goHome() {
    this.router.navigate(['/home']);  
  }
}
