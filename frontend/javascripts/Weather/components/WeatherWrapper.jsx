import { observer } from 'mobx-react';
import WeatherCityBox from 'Weather/components/WeatherCityBox';

@observer
export default class WeatherWrapper extends React.Component {
  render() {
    const { city } = this.props;

    return (
      <div className="weather-wrapper">
        {
          city.map((city, index) =>
            <WeatherCityBox
              key={ index }
              weather={ city.weather }
            />
          )
        }
      </div>
    );
  }
}