import { Component, OnInit } from '@angular/core';
import { IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, RouterModule, IonButtons, IonMenuButton ],
})

export class HomePage implements OnInit{
  constructor(private router:Router) {}

  ngOnInit(): void {

  }

}
