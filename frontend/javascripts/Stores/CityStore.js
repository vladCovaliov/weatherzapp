import { observable, computed } from 'mobx';
import CityModel from 'Models/CityModel';

export default class CityStore {
	@observable values = [];

    constructor(routingStore) {
        this.routingStore = routingStore;
        this.values = this.valuesFromCityParam();
    }

    addCity(cityName) {
    	this.values.push(new CityModel(cityName));
        this.routingStore.push({
		  pathname: this.routingStore.location.pathname,
		  query: { city: this.cityQueryParam }
		})
    }

    valuesFromCityParam() {
        if (!!this.routingStore.location.query.city){
            return this.routingStore.location.query.city.split(',').map((cityName) => {
                return (new CityModel(cityName));
            });
        } else {
            return [];
        }
    }

    @computed get hasValues() {
    	return (this.values.length > 0) ;
    }

    @computed get cityQueryParam() {
    	if (!!this.values) {
    		return this.values.map((city) => { return city.toURL }).join(',');
        } else {
        	return '';
        }
    }

    @computed get decoratedCities() {
    	return this.values.map((city) => { return city.toURL }).join(',');
    }
}