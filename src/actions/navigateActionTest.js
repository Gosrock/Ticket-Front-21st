import { NAVIGATE_SUCCESS, NAVIGATE_ERROR } from './types';
import axios from 'axios';
import history from '../history';
const navigateActionTest =
  ({ userId, password }, callback) =>
  async dispatch => {
    try {
      dispatch({ type: NAVIGATE_SUCCESS });

      history.push('./navigate');
      // 자동으로 피쳐로 넘어가게끔
      // callback();
    } catch (e) {
      //400 ~
      dispatch({ type: NAVIGATE_ERROR, payload: '에러 처리' });
    }
  };

export default navigateActionTest;
