import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ireland-sports',
  templateUrl: './ireland-sports.page.html',
  styleUrls: ['./ireland-sports.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IrelandSportsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
