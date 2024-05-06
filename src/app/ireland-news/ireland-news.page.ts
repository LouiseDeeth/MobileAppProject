import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabs, IonTabButton, IonTabBar, IonButtons, IonBackButton, IonButton, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { Router, RouterLinkWithHref } from '@angular/router';
import { homeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-ireland-news',
  templateUrl: './ireland-news.page.html',
  styleUrls: ['./ireland-news.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabs, IonTabButton, IonTabBar, CommonModule, FormsModule, IonButtons, IonBackButton, IonButton, IonImg, RouterLinkWithHref, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle ]
  })
export class IrelandNewsPage implements OnInit {
  irelandNews:any =[];

  constructor(
    private router: Router,
    private dataService: DataService
  ) { 
    addIcons({homeOutline});
  }

  ngOnInit() {
    this.dataService.getIrishNewsData().subscribe(
      (data)=>{
        this.irelandNews = data.articles;
        console.log(this.irelandNews);
      },
      error => console.error('Error fetching Irish news: ', error)
    );
  }

  goHome() {
    this.router.navigate(['/home']);  
  }
}
