import { observable, computed } from 'mobx';
import { RouterStore } from 'mobx-react-router';

class CityStore {
	@observable values = [];

    setup() {
    	this.values = this.valuesFromCityParam();
    }

    addCity(cityName) {
    	this.values.push(cityName);
        routingStore.push({
		  pathname: routingStore.location.pathname,
		  query: { city: this.cityQueryParam }
		})
    }

    valuesFromCityParam() {
    	return routingStore.location.query.city.split(',');
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

const routingStore = new RouterStore();
const cityStore = new CityStore();

export default {
	cityStore,
	routingStore
};