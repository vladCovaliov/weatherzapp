import { observable, computed } from 'mobx';

export default class WeatherModel {
	@observable temperature;
	@observable isFetched = false;

	update(object) {
		this.temperature = object.temperature;
		this.isFetched = true;
	}
}
