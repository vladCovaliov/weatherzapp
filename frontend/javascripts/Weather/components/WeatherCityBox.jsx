import { observer } from 'mobx-react';

@observer
export default class WeatherCityBox extends React.Component {
  getFetchedContent() {
    const {
      now: { description: description },
      main: { temp: temp, humidity: humidity },
      wind: { speed: wind }
    } = this.props.weather;

    console.log(this.props.weather);
    return [
      <div
        className="temp"
        key="temp"
      >
        <p className="grades">
          { this.formatTemp(temp) }
          <span className="celsius">
            &#8451;
          </span>
        </p>
        <p className="desc">
          { description }
        </p>
      </div>,
      <div
        className="other"
        key="other"
      >
        <p> Humidity: { this.formatHumidity(humidity) } </p>
        <p> Wind: { this.formatWind(wind) } </p>
      </div>
    ];
  }

  getLoadingContent() {
    return (
      <div
        className="full-width"
      >
        Loading...
      </div>
    );
  }

  getErrorContent() {
    const { error } = this.props.weather;

    return (
      <div
        className="full-width"
      >
        { error }
      </div>
    );
  }

  getWeatherContent() {
    const { error, isFetched } = this.props.weather;
    let content;

    if (isFetched && !error) {
      content = this.getFetchedContent();
    } else if (!isFetched) {
      content = this.getLoadingContent();
    } else if (error) {
      content = this.getErrorContent();
    }

    return content;
  }

  formatDate(date) {
    const m_names = new Array("January", "February", "March",
      "April", "May", "June", "July", "August", "September",
      "October", "November", "December");

    return `${date.getDate()} ${m_names[date.getMonth()]}`;
  }

  formatTemp(temp) {
    return Math.round((temp - 272.15) * 10) / 10;
  }

  formatHumidity(humidity) {
    return `${humidity}%`;
  }

  formatWind(wind) {
    return `${wind}km/h`;
  }

  render() {
    const { city, date } = this.props.weather;

    return (
      <div className="weather-city-box">
        <div className="info">
          <p className="city">
            { city.name }
          </p>
          <p className="date">
           { this.formatDate(date) }
          </p>
        </div>
        { this.getWeatherContent() }
      </div>
    );
  }
}