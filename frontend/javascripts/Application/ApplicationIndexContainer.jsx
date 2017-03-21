import { observer, inject } from 'mobx-react';
import WeatherWrapper from 'Weather/WeatherWrapper';

@inject('cityStore') @observer
export default class ApplicationIndexContainer extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.cityStore.addCity(this.refs.city.value)
    this.refs.city.value = '';
  }

    render() {
      const { values } = this.props.cityStore;

      return (
        <div>
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
          <WeatherWrapper
            city={ values }
          />
        </div>
      );
    }
}