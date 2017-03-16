import { Route, Router, Redirect, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

export default function renderRoutes() {
  return (
    <Provider>
      <Router history={ browserHistory }>
      </Router>
    </Provider>
  );
}