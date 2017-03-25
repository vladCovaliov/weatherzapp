import { observable } from 'mobx';
import axios from 'axios';

export default class WeatherModel {
  @observable isFetched = false;

  constructor(city) {
    this.city = city;
    this.date = new Date();
  }

  fetch() {
    axios.get('/weather', {
      params: {
        city: this.city.name
      }
    }).then((response) => {
      const { data } = response;

      if (data.cod === 200) {
        this.main = data.main;
        this.now = data.weather[0];
        this.wind = data.wind;
      } else {
        this.error = data.message;
      }
      this.isFetched = true;
    })
    .catch((error) => {
      this.error = error;
      this.isFetched = true;
    });
  }
}
