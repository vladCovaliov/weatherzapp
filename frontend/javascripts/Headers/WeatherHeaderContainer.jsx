import { observer, inject } from 'mobx-react';

@inject('cityStore') @observer
export default class WeatherHeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenCities: false
    }
  }

	onSubmit = (event) => {
    event.preventDefault();
    this.refs.city.value.split(', ').forEach(
      city => this.props.cityStore.addCity(city));
    this.refs.city.value = '';
    this.toggleHiddenCities();
  }

	removeCity = (cityName, event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.cityStore.removeCity(cityName);
  }

  stopPropagation = (event) => {
    event.stopPropagation();
  }

	getRemove(city) {
    return (
      <a className="city-remove" onClick={ this.removeCity.bind(this, city.name) } >
        <img src="/assets/x-icon.png" alt="Remove city icon"/>
      </a>
    );
  }

  getCityInputs() {
    const { values } = this.props.cityStore;

    return values.map((city, index) =>
      <div
        className="city-input"
        key={ index }
      >
        <span onClick={ this.stopPropagation }> { city.name } </span>
        { this.getRemove(city) }
      </div>
    );
  }

  hideCities = () => {
    this.setState({ hiddenCities: true });
    this.refs.city.focus();
  }

  showCities = () => {
    this.setState({ hiddenCities: false });
  }

	render() {
    // We  can use classNames npm package instead
    const classNames = ["cities-inputs"];
    if (this.state.hiddenCities) {
      classNames.push("hidden")
    }

		return (
			<div className="w-header">
		    <form onSubmit={ this.onSubmit } onFocus={ this.hideCities } onBlur={ this.showCities }>
  		    <input
  		      ref="city"
  		      type="text"
            onFocus={ this.hideCities } onBlur={ this.showCities }
  		    >
  		    </input>
          <div
            className={ classNames.join(', ') }
            onClick={ this.hideCities }
          >
            { this.getCityInputs() }
          </div>
		    </form>
		  </div>
		)
	}
}