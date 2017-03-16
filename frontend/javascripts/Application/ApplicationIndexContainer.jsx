import { observer, inject } from 'mobx-react';

@inject('routingStore', 'cityStore') @observer
export default class ApplicationIndexContainer extends React.Component {
	onSubmit = (event) => {
		event.preventDefault();
		this.props.cityStore.addCity(this.refs.city.value)
		this.refs.city.value = '';
	}

	componentWillMount() {
		this.props.cityStore.setup()
	}

    render() {
        return (
        	<div>
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