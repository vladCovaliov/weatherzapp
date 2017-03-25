import { observer } from 'mobx-react';
import WeatherContainer from 'Weather/WeatherContainer';
import WeatherHeaderContainer from 'Headers/WeatherHeaderContainer';

@observer
export default class ApplicationIndexContainer extends React.Component {
  render() {
    return (
      <div id="w-application-index">
        <WeatherHeaderContainer />
        <WeatherContainer />
      </div>
    );
  }
}