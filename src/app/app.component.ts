import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet, IonButtons } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { IrelandNewsService, IrelandSportService, AustraliaNewsService, AustraliaSportService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, CommonModule, IonButtons],
})

export class AppComponent implements OnInit{
  constructor(
    private irelandNewsService: IrelandNewsService, 
    private irelandSportService: IrelandSportService,
    private australiaNewsService: AustraliaNewsService, 
    private australiaSportService: AustraliaSportService
  ) {}
  news: any = [];
  sport: any = [];
  
  ngOnInit(){
    this.irelandNewsService.GetIrishNewsData().subscribe({
      next: (data) => this.news = data.articles,  
      error: (error) => console.error('Error fetching Irish news:', error)
    });

    this.irelandSportService.GetIrishSportData().subscribe({
      next: (data) => this.sport = data.articles, 
      error: (error) => console.error('Error fetching Irish sports:', error)
    });

    this.australiaNewsService.GetAustraliaNewsData().subscribe({
      next: (data) => this.news = data.articles, 
      error: (error) => console.error('Error fetching Australian news:', error)
    });

    this.australiaSportService.GetAustraliaSportData().subscribe({
      next: (data) => this.sport = data.articles, 
      error: (error) => console.error('Error fetching Australian sports:', error)
    });
  }
}
