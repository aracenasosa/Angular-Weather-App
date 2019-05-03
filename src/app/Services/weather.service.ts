import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  Uri = '';
  apiKey = '6e347a2495b5e7d58c9f0a2b9c31eff5';

  constructor(private http: HttpClient) {
    this.Uri = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
   }

   getWeather(cityName: string, countryCode: string) {
     return this.http.get(`${this.Uri}${cityName},${countryCode}`);
   }
}

