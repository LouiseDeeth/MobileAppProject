import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-australia',
  templateUrl: './australia.page.html',
  styleUrls: ['./australia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule]
})
export class AustraliaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
