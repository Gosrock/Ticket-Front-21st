import history from '../../history';

export const ticketStudentInfo =
  ({ studentID, smallGroup }) =>
  dispatch => {
    console.log(studentID, smallGroup);

    const studentInfoObj = {
      studentID: studentID,
      smallGroup: smallGroup
    };
    dispatch({ type: 'STUDENT_INFO_SUCCESS', payload: studentInfoObj });

    // 자동으로 다음 단계로 넘어가게 끔
    history.push('/ticketing/deposit');
  };
