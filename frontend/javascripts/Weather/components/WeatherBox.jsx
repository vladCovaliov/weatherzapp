import { observer } from 'mobx-react';

@observer
export default class WeatherBox extends React.Component {
  render() {
    const { cityName, now, main } = this.props;

    return (
      <span>
        Temperature in { cityName } is&nbsp;
        { main.temp }
      </span>
    );
  }
}
