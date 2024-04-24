import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-australia-news',
  templateUrl: './australia-news.page.html',
  styleUrls: ['./australia-news.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AustraliaNewsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
