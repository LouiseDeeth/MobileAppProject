import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabs, IonTabButton, IonTabBar, IonButtons, IonBackButton, IonButton , IonImg} from '@ionic/angular/standalone';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import {homeOutline} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-australia-news',
  templateUrl: './australia-news.page.html',
  styleUrls: ['./australia-news.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabs, IonTabButton, IonTabBar, CommonModule, FormsModule, IonButtons, IonBackButton, IonButton, IonImg, RouterLinkWithHref]
  })
export class AustraliaNewsPage implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {

  }

  OnButtonClick(){

  }
}

