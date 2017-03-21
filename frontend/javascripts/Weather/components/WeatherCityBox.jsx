import { observer } from 'mobx-react';
import WeatherBox from './WeatherBox';

@observer
export default class WeatherCityBox extends React.Component {
  getContent() {
    const { isFetched, now, city, main, wind } = this.props.weather;

    if (isFetched) {
      return (
        <WeatherBox
          now={ now }
          main={ main }
          wind={ wind }
          cityName={ city.name }
        />
      );
    } else if (!isFetched) {
      return (
        <span> Loading weather for { city.name } </span>
      )
    }
  }
  render() {
    return (
      <div className="weather-city-box">
        { this.getContent() }
      </div>
    );
  }
}