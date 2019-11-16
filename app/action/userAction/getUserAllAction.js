import {GET_USER_ALL, RESET_USER} from '../actionTypes';
import {getCountriesApi} from '../../../api/countriesApi';

const getUserAllAction = () => {
  return dispatch => {
    return dispatch({
      type: GET_USER_ALL,
      payload: getCountriesApi(),
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

export {getCountries, resetStatusGetCountries};
