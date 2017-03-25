import { observer, inject } from 'mobx-react';
import WeatherWrapper from 'Weather/components/WeatherWrapper';

@inject('cityStore')
export default class WeatherContainer extends React.Component {
  render() {
    const { values } = this.props.cityStore;

    return (
      <div className="w-container">
        <WeatherWrapper
          city={ values }
        />
      </div>
    );
  }
}