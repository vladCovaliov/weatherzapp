import { observer, inject } from 'mobx-react';

@inject('cityStore') @observer
export default class ApplicationIndexContainer extends React.Component {
	onSubmit = (event) => {
		event.preventDefault();
		this.props.cityStore.addCity(this.refs.city.value)
		this.refs.city.value = '';
	}

    render() {
        return (
        	<div>
        	    <span> { this.props.cityStore.decoratedCities } </span>
	        	<form onSubmit={ this.onSubmit }>
		        	<input
		        	    ref="city"
		        	    type="text"
		        	>
		        	</input>
		        	<button
		        	    type="submit"
		        	>
		        	    Search
		        	</button>
		        </form>
	        </div>
        );
    }
}