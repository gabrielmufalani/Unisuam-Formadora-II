import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '60d5b9ce2780795c1bd568e5c1371983';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  async getCurrentWeather(city: string = 'São Paulo', lang: string = 'pt_br', units: string = 'metric') {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&lang=${lang}&units=${units}`;
    return await lastValueFrom(this.http.get(url));
  }
}
