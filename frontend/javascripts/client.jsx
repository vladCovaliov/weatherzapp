import { browserHistory } from 'react-router';
import renderRoutes from './routes';

ReactDOM.render(
  renderRoutes(),
  document.getElementById('root')
)