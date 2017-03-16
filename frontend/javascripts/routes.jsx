import { Route, Router, Redirect, browserHistory } from 'react-router';
import ApplicationIndexRoute from 'Routes/ApplicationIndexRoute';

export default function renderRoutes() {
    return (
		<Router history={ browserHistory }>
	    	<Route path="/" component={ ApplicationIndexRoute } />
		</Router>
	);
}