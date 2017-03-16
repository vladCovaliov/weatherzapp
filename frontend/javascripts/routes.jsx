import { Provider } from 'mobx-react';
import { Route, Router, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'mobx-react-router';
import ApplicationIndexRoute from 'Routes/ApplicationIndexRoute';
import stores from './stores';

const history = syncHistoryWithStore(browserHistory, stores.routingStore);

export default function renderRoutes() {
   return (
    	<Provider { ...stores }>
			<Router history={ history }>
		    	<Route path="/" component={ ApplicationIndexRoute } />
			</Router>
		</Provider>
	);
}