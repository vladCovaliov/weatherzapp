import { observable, computed } from 'mobx';

export default class CityStore {
	@observable values = [];

    constructor(routingStore) {
        this.routingStore = routingStore;
        this.setup();
    }

    setup() {
    	this.values = this.valuesFromCityParam();
    }

    addCity(cityName) {
    	this.values.push(cityName);
        this.routingStore.push({
		  pathname: this.routingStore.location.pathname,
		  query: { city: this.cityQueryParam }
		})
    }

    valuesFromCityParam() {
    	return this.routingStore.location.query.city.split(',');
    }

    @computed get hasValues() {
    	return (this.values.length > 0) ;
    }

    @computed get cityQueryParam() {
    	if (!!this.values) {
    		return this.values.join(',');
        } else {
        	return '';
        }
    }

    @computed get decoratedCities() {
    	return this.values.join(',');
    }
}