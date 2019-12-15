import {
  getUmkmAllApi,
  getUmkmByIdApi,
  postUmkmApi,
  putUmkmApi,
  deleteUmkmApi,
} from '../../api/umkmApi/umkmApi';
import {
  GET_UMKM_ALL,
  RESET_UMKM,
  POST_UMKM,
  GET_UMKM_BY_ID,
  PUT_UMKM,
  DELETE_UMKM,
} from '../actionTypes';

const getUmkmAllAction = data => {
  return dispatch => {
    return dispatch({
      type: GET_UMKM_ALL,
      payload: data,
    });
  };
};

const getUmkmByIdAction = data => {
  return dispatch => {
    return dispatch({
      type: GET_UMKM_BY_ID,
      payload: data,
    });
  };
};

const postUmkmAction = data => {
  return dispatch => {
    return dispatch({
      type: POST_UMKM,
      payload: data,
    });
  };
};

const putUmkmAction = data => {
  return dispatch => {
    return dispatch({
      type: PUT_UMKM,
      payload: putUmkmApi(data),
    });
  };
};

const deleteUmkmAction = data => {
  return dispatch => {
    return dispatch({
      type: DELETE_UMKM,
      payload: deleteUmkmApi(data),
    });
  };
};

const resetUmkmAction = () => {
  return dispatch => {
    return dispatch({
      type: RESET_UMKM,
    });
  };
};

export {
  getUmkmAllAction,
  resetUmkmAction,
  getUmkmByIdAction,
  postUmkmAction,
  putUmkmAction,
  deleteUmkmAction,
};
