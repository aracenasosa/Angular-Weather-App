import { Component } from '@angular/core';
import { WeatherService } from './Services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  weather;

  constructor(private weatherService: WeatherService) { }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode)
      .subscribe(
        data => {
          console.log(data);
          this.weather = data;
        },
        err => console.log(err));
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {

    if (cityName.value && countryCode.value) {
      this.getWeather(cityName.value, countryCode.value);
      cityName.value = '';
      countryCode.value = '';
    } else {

      alert('Please Insert some values');
    }
    cityName.focus();
    return false;
  }
}
