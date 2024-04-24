import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ireland-news',
  templateUrl: './ireland-news.page.html',
  styleUrls: ['./ireland-news.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IrelandNewsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
