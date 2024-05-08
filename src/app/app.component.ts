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
export class AppComponent implements OnInit {
  loading = false;
  error: string | null = null;

  irelandNews: any = [];
  australiaNews: any = [];
  irelandSports: any = [];
  australiaSports: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.error = null;

    this.dataService.getIrishNewsData().subscribe({
      next: data => {
        this.irelandNews = data.articles;
      },
      error: error => {
        console.error('Error fetching Irish news:', error);
        this.error = 'Failed to fetch Irish news';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });

    this.dataService.getIrishSportData().subscribe({
      next: data => {
        this.irelandSports = data.articles;
      },
      error: error => {
        console.error('Error fetching Irish sport:', error);
        this.error = 'Failed to fetch Irish sport';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });

    this.dataService.getAustraliaNewsData().subscribe({
      next: data => {
        this.australiaNews = data.articles;
      },
      error: error => {
        console.error('Error fetching Australian news:', error);
        this.error = 'Failed to fetch Australian news';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });

    this.dataService.getAustraliaSportData().subscribe({
      next: data => {
        this.australiaSports = data.articles;
      },
      error: error => {
        console.error('Error fetching Australian sport:', error);
        this.error = 'Failed to fetch Australian sport';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
