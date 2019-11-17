import {GET_USER_ALL, RESET_USER} from '../actionTypes';
import {getUserAll} from '../../api/userApi/userApi';

const getUserAllAction = () => {
  return dispatch => {
    return dispatch({
      type: GET_USER_ALL,
      payload: getUserAll(),
    });
  };
};

const resetUserAction = () => {
  return dispatch => {
    return dispatch({
      type: RESET_USER,
    });
  };
};

export {getUserAllAction, resetUserAction};
