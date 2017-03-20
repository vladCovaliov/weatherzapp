import { observable, computed } from 'mobx';
import WeatherModel from 'Models/WeatherModel';

export default class CityModel {
	@observable name;

	constructor(cityName) {
		this.name = cityName;
		this.weather = new WeatherModel();
		this.getWeather();
	}

	getWeather() {
        setTimeout(() => {
        	console.log("Done")
        	this.weather.update({
        		temperature: Math.random() * 50
        	})
        }, Math.random() * 2000)
	}

	toURL() {
        return this.name;
	}

	//Will be removed
	toWeather() {
		const { temperature, isFetched } = this.weather;
		if (isFetched) {
			return `Temperature in ${this.name} is ${temperature} \n`
		}
	}

	toJS() {
		return {
			name: this.name
		}
	}
}