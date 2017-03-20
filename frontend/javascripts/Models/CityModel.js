import { observable, computed } from 'mobx';

export default class CityModel {
	@observable name = '';

	constructor(cityName) {
		this.name = cityName;
	}

	@computed get toURL() {
        return this.name;
	}
}