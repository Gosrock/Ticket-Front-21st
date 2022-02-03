import { ROUTE_CHANGE } from '../action-types';

export const routeChange =
  ({ pathname }) =>
  async dispatch => {
    // console.log(pathname);
    dispatch({ type: ROUTE_CHANGE, payload: pathname });
  };
