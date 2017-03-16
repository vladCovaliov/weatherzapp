import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'mobx-react-router';
import { RouterStore } from 'mobx-react-router';
import CityStore from 'City/store';

const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);
const cityStore = new CityStore(routingStore);

export default {
	stores: {
        cityStore,
	    routingStore
    },
    history
};