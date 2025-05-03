import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss']
})
export class ForecastPage {
  city: string = '';
  forecastData: any = null;
  erro: string = '';

  constructor(private weatherService: WeatherService) {}

  voltar() {
    window.history.back();
  }
  
  buscarPrevisao() {
    this.forecastData = null;
    this.erro = '';

    this.weatherService.getForecast(this.city).subscribe({
      next: (data) => {
        this.forecastData = data;
      },
      error: () => {
        this.erro = 'Erro ao buscar a previsão. Verifique o nome da cidade.';
      }
    });
  }
}
