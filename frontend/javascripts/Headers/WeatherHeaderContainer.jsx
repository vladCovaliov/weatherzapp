import { observer, inject } from 'mobx-react';

@inject('cityStore')
export default class WeatherHeaderContainer extends React.Component {
	onSubmit = (event) => {
    event.preventDefault();
    this.refs.city.value.split(', ').forEach(
      city => this.props.cityStore.addCity(city));
    this.refs.city.value = '';
  }

	removeCity = (cityName, event) => {
    event.preventDefault();
    this.props.cityStore.removeCity(cityName);
  }

	getRemove(city) {
    return (
      <a href="#" onClick={ this.removeCity.bind(this, city.name) } >
        Remove
      </a>
    );
  }

	render() {
		return (
			<div className="w-header">
		    <form onSubmit={ this.onSubmit }>
		    <input
		      ref="city"
		      type="text"
		    >
		    </input>
			    <button
			      type="submit"
			    >
			      Search
			    </button>
		    </form>
		  </div>
		)
	}
}