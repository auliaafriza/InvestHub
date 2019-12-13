import {
  getInvestByIdApi,
  postInvestApi,
  postTopUpApi,
} from '../../api/investasiApi/getInvestasiByIdApi';
import {GET_INVEST_BY_ID, POST_INVEST, POST_TOP_UP} from '../actionTypes';

const getInvestByIdAction = id => {
  return dispatch => {
    return dispatch({
      type: GET_INVEST_BY_ID,
      payload: getInvestByIdApi(id),
    });
  };
};

const postInvestAction = data => {
  return dispatch => {
    return dispatch({
      type: POST_INVEST,
      payload: postInvestApi(data),
    });
  };
};

const postTopUpAction = data => {
  return dispatch => {
    return dispatch({
      type: POST_TOP_UP,
      payload: postTopUpApi(data),
    });
  };
};

export {getInvestByIdAction, postInvestAction, postTopUpAction};
