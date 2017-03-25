import { observer, inject } from 'mobx-react';
import WeatherWrapper from 'Weather/components/WeatherWrapper';

@inject('cityStore') @observer
export default class WeatherContainer extends React.Component {
  getContent() {
    let content;
    const { values } = this.props.cityStore;

    if (values.length > 0) {
      content = (
        <WeatherWrapper
          city={ values }
        />
      );
    } else {
      content = (
        <h2>
          WHERE ARE YOU FROM?
          <br/>
          <br/>
          Use the search box to find the weather in your city!
        </h2>
      );
    }

    return content;
  }

  render() {
    return (
      <div className="w-container">
        { this.getContent() }
      </div>
    );
  }
}