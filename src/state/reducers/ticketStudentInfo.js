const INITIAL_STATE = {
  studentID: null,
  smallGroup: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  if (action.type === 'STUDENT_INFO_SUCCESS') {
    return {
      ...state,
      studentID: action.payload.studentID,
      smallGroup: action.payload.smallGroup
    };
  }
  return state;
}
