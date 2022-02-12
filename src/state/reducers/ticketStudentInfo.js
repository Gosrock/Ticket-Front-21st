const INITIAL_STATE = {
  studentID: null,
  newbie: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  if (action.type === 'STUDENT_INFO_SUCCESS') {
    return {
      ...state,
      studentID: action.payload.studentID,
      newbie: action.payload.newbie
    };
  }
  return state;
}
