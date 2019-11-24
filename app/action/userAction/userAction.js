import {
  GET_USER_ALL,
  RESET_USER,
  GET_USER_BY_ID,
  POST_USER,
  PUT_USER,
  DELETE_USER,
} from '../actionTypes';
import {
  getUserAll,
  getUserByIdApi,
  postUserApi,
  deleteUserApi,
  putUserApi,
} from '../../api/userApi/userApi';

const getUserAllAction = () => {
  return dispatch => {
    return dispatch({
      type: GET_USER_ALL,
      payload: getUserAll(),
    });
  };
};

const getUserByIdAction = id => {
  return dispatch => {
    return dispatch({
      type: GET_USER_BY_ID,
      payload: getUserByIdApi(id),
    });
  };
};

const postUserAction = data => {
  return dispatch => {
    return dispatch({
      type: POST_USER,
      payload: postUserApi(data),
    });
  };
};

const putUserAction = data => {
  return dispatch => {
    return dispatch({
      type: PUT_USER,
      payload: putUserApi(data),
    });
  };
};

const deleteUserAction = data => {
  return dispatch => {
    return dispatch({
      type: DELETE_USER,
      payload: deleteUserApi(data),
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

export {
  getUserAllAction,
  resetUserAction,
  getUserByIdAction,
  postUserAction,
  putUserAction,
  deleteUserAction,
};
