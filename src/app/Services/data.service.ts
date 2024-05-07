import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }
  
  getIrishNewsData():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=ie&apiKey=28effd65f15d412db7549be57d32c3e2&limit=1")
  }

  getIrishSportData():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=28effd65f15d412db7549be57d32c3e2")
  }

  getAustraliaNewsData():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=au&apiKey=28effd65f15d412db7549be57d32c3e2")
  }

  getAustraliaSportData():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=28effd65f15d412db7549be57d32c3e2")
  }

  getGalwayWeatherData():Observable<any>{
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303")
  }
  
  getDublinWeatherData():Observable<any>{
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Dublin&appid=6a66416403ed8e5e6e762cb8c261f303")
  }

  getCorkWeatherData():Observable<any>{
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Cork&appid=6a66416403ed8e5e6e762cb8c261f303")
  }

  getBrisbaneWeatherData():Observable<any>{
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Brisbane&appid=6a66416403ed8e5e6e762cb8c261f303")
  }

  getSydneyWeatherData():Observable<any>{
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=6a66416403ed8e5e6e762cb8c261f303")
  }

  getPerthWeatherData():Observable<any>{
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Perth&appid=6a66416403ed8e5e6e762cb8c261f303")
  }
  getMelbourneWeatherData():Observable<any>{
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Melbourne&appid=6a66416403ed8e5e6e762cb8c261f303")
  }

  getDarwinWeatherData():Observable<any>{
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Darwin&appid=6a66416403ed8e5e6e762cb8c261f303")
  }
}
