import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-australia-sports',
  templateUrl: './australia-sports.page.html',
  styleUrls: ['./australia-sports.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AustraliaSportsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
