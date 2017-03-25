import { observer } from 'mobx-react';
import WeatherBox from './WeatherBox';

@observer
export default class WeatherCityBox extends React.Component {
  getContent() {
    const { error, isFetched, now, city, main, wind } = this.props.weather;
    let content;

    if (isFetched && !error) {
      content = (
        <WeatherBox
          now={ now }
          main={ main }
          wind={ wind }
          cityName={ city.name }
        />
      );
    } else if (!isFetched) {
      content = (
        <span> Loading weather for { city.name } </span>
      )
    } else if (error) {
      content = (
        <span> { error } </span>
      )
    }

    return content;
  }

  render() {
    return (
      <div className="weather-city-box">
        { this.getContent() }
      </div>
    );
  }
}