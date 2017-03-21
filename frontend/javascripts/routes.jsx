import { Provider } from 'mobx-react';
import { Route, Router, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'mobx-react-router';
import ApplicationIndexRoute from 'Routes/ApplicationIndexRoute';
import init from './init';

export default function renderRoutes() {
  return (
    <Provider { ...init.stores }>
      <Router history={ init.history }>
        <Route path="/" component={ ApplicationIndexRoute } />
      </Router>
    </Provider>
  );
}