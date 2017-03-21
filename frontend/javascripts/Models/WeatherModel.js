import { observable } from 'mobx';
import axios from 'axios';

export default class WeatherModel {
  @observable isFetched = false;

  constructor(city) {
    this.city = city;
  }

  fetch() {
    axios.get('/weather', {
      params: {
        city: this.city.name
      }
    }).then((response) => {
      const { data } = response;
      console.log(data);

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
      console.log(error);
    });
  }
}
