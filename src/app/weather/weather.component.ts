import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherData: any;
  city: string = '';
  apiUrl: string = 'http://localhost:5000/weather'; // Ensure this URL matches your Flask backend

  constructor(private http: HttpClient) {}

  getWeather() {
    if (this.city) {
      this.http.get(`${this.apiUrl}?city=${this.city}`).subscribe(
        data => this.weatherData = data,
        error => console.error('Error fetching weather data', error)
      );
    } else {
      console.error('City name is required');
    }
  }
}
