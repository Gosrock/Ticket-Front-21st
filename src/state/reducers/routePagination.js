import { ROUTE_CHANGE } from '../action-types';
const INITIAL_STATE = {
  currentPage: '',
  slideFromDirection: 'right'
};

const pageOrder = ['/auth/message', '/test', '/auth/validation'];

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ROUTE_CHANGE:
      // 슬라이드 방향 디력선 설정
      let slideFromDirection = 'right';
      if (
        pageOrder.indexOf(state.currentPage) > pageOrder.indexOf(action.payload)
      ) {
        slideFromDirection = 'left';
      }
      return {
        ...state,
        currentPage: action.payload,
        slideFromDirection: slideFromDirection
      };
    default:
      return state;
  }
}
