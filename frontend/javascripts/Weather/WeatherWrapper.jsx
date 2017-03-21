import { observer } from 'mobx-react';
import WeatherCityBox from './components/WeatherCityBox';

@observer
export default class WeatherWrapper extends React.Component {
  render() {
    return (
      <div className="weather-wrapper">
        {
          this.props.city.map((city, index) =>
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