import { observable } from 'mobx';
import axios from 'axios';

export default class WeatherModel {
	@observable temperature;
	@observable isFetched = false;

    constructor(city) {
    	this.city = city;
    }

	update(object) {
		this.temperature = object.temperature;
		this.isFetched = true;
	}

	fetch() {
		axios.get('/weather', {
			city: this.city.name
		}).then(function (response) {
		    console.log(response);
		})
		.catch(function (error) {
		    console.log(error);
		});
	}
}
