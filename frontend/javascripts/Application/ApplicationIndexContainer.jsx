export default class ApplicationIndexContainer extends React.Component {
	onSubmit = (event) => {
		event.preventDefault();
	}

    render() {
        return (
        	<form onSubmit={ this.onSubmit }>
	        	<input
	        	    ref="value"
	        	    type="text"
	        	>
	        	</input>
	        	<button
	        	    type="submit"
	        	>
	        	    Search
	        	</button>
	        </form>
        );
    }
}