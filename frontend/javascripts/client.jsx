import { browserHistory } from 'react-router';
import {
  localDev,
  prodDev
} from './actions';
import renderRoutes from './routes';

ReactDOM.render(
  renderRoutes(),
  document.getElementById('root')
)