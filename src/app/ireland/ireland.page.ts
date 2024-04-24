import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ireland',
  templateUrl: './ireland.page.html',
  styleUrls: ['./ireland.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule]
})
export class IrelandPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
