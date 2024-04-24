import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, 
    FormsModule, CommonModule, Router, IonImg],
})
export class HomePage implements OnInit{
  constructor(private router:Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  OnButtonClick(){

  }
}
