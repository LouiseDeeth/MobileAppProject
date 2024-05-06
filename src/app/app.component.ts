import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet, IonButtons } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, CommonModule, IonButtons],
})

export class AppComponent implements OnInit{
  constructor(private dataService: DataService) {}

  irelandNews: any = [];
  australiaNews: any = [];
  irelandSports: any = [];
  australiaSports: any = [];
  
  ngOnInit(){
    this.dataService.getIrishNewsData().subscribe({
      next: (data) => this.irelandNews = data.articles,  
      error: (error) => console.error('Error fetching Irish news:', error)
    });

    this.dataService.getIrishSportData().subscribe({
      next: (data) => this.irelandSports = data.articles, 
      error: (error) => console.error('Error fetching Irish sports:', error)
    });

    this.dataService.getAustraliaNewsData().subscribe({
      next: (data) => this.australiaNews = data.articles, 
      error: (error) => console.error('Error fetching Australian news:', error)
    });

    this.dataService.getAustraliaSportData().subscribe({
      next: (data) => this.australiaSports = data.articles, 
      error: (error) => console.error('Error fetching Australian sports:', error)
    });
  }
}
