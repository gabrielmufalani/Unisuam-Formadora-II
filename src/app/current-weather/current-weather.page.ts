import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './current-weather.page.html',
  styleUrls: ['./current-weather.page.scss'],
})
export class CurrentWeatherPage {
  city: string = '';
  weatherData: any;
  erro: string = '';

  constructor(private weatherService: WeatherService) {}
  voltar() {
    window.history.back();
  }

  async buscarClima() {
    this.erro = '';
    try {
      this.weatherData = await this.weatherService.getCurrentWeather(this.city);
    } catch (error) {
      this.erro = 'Erro ao buscar o clima. Verifique o nome da cidade.';
      this.weatherData = null;
    }
  }
}