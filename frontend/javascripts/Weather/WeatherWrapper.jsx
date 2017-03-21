import { observer } from 'mobx-react';
import WeatherCityBox from './components/WeatherCityBox';

@observer
export default class WeatherWrapper extends React.Component {
  render() {
    const { city, removeCity } = this.props;

    return (
      <div className="weather-wrapper">
        {
          city.map((city, index) =>
            <WeatherCityBox
              key={ index }
              weather={ city.weather }
              removeCity={ removeCity.bind(this, city.name) }
            />
          )
        }
      </div>
    );
  }
}