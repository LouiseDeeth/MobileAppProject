import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule, 
    IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, RouterModule ],
})

export class HomePage implements OnInit{
  constructor(private router:Router) {}

  ngOnInit(): void {

  }

  OnButtonClick(){

  }
}
