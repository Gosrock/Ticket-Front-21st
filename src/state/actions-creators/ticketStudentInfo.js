import history from '../../history';

export const ticketStudentInfo =
  ({ studentID }) =>
  dispatch => {
    //학번 신입생인지 아닌지 판단

    const validateID = new RegExp('^C2');
    const newbie = validateID.test(studentID);
    //console.log(studentID, newbie);

    const studentInfoObj = {
      studentID: studentID,
      newbie: newbie
    };
    dispatch({ type: 'STUDENT_INFO_SUCCESS', payload: studentInfoObj });

    // 자동으로 다음 단계로 넘어가게 끔
    history.push('/ticketing/deposit');
  };
