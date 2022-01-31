import { createBrowserHistory } from 'history';
import { routeChange } from './state/actions-creators';
import { store } from './state/storeSetting';
const history = createBrowserHistory();

history.listen(({ action, location }) => {
  console.log(action, location);
  store.dispatch(routeChange({ pathname: location.pathname }));
});
export default history;
