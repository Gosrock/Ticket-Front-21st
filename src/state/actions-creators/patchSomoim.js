import {
  PATCH_SOMOIM_ERROR,
  PATCH_SOMOIM_PENDING,
  PATCH_SOMOIM_SUCCESS
} from '../action-types';
import axios from 'axios';
import history from '../../history';

export const patchSomoim = smallGroup => async dispatch => {
  try {
    dispatch({ type: PATCH_SOMOIM_PENDING });

    const response = await axios.patch(`/tickets`, { smallGroup });
    console.log('getTickets action', response.data.data);

    const temp = [];
    temp.push(response.data.data);
    console.log(temp);
    dispatch({ type: PATCH_SOMOIM_SUCCESS, payload: temp });
  } catch (e) {
    //400 ~
    dispatch({ type: PATCH_SOMOIM_ERROR, payload: e.response.data.message });
  }
};
