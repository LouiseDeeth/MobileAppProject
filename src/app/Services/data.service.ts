import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IrelandNewsService {
  constructor(private httpClient:HttpClient) { }
  GetIrishNewsData():Observable<any>{
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=ie&apiKey=28effd65f15d412db7549be57d32c3e2')
  }
}

@Injectable({
  providedIn: 'root'
})

export class IrelandSportService {
  constructor(private httpClient:HttpClient) { }
  GetIrishSportData():Observable<any>{
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=28effd65f15d412db7549be57d32c3e2')
  }
}

@Injectable({
  providedIn: 'root'
})
export class AustraliaNewsService {
  constructor(private httpClient:HttpClient) { }
  GetAustraliaNewsData():Observable<any>{
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=au&apiKey=28effd65f15d412db7549be57d32c3e2')
  }
}

@Injectable({
  providedIn: 'root'
})

export class AustraliaSportService {
  constructor(private httpClient:HttpClient) { }
  GetAustraliaSportData():Observable<any>{
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=28effd65f15d412db7549be57d32c3e2')
  }
}
