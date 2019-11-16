import * as types from '../action/actionTypes';

const initialState = {
  userAll: [],
  userAllStatus: null,
  loading: false,
  errors: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //---------------------------------
    // GET_USER_ALL
    //---------------------------------
    case types.GET_USER_ALL:
      return {...state};
    case types.GET_USER_ALL_PENDING:
      return {...state, loading: true};
    case types.GET_USER_ALL_FULFILLED:
      return {
        ...state,
        userAll: action.payload.data,
        loading: false,
        userAllStatus: true,
      };
    case types.GET_USER_ALL_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        userAllStatus: false,
      };
    case types.RESET_SELECT_TOUR_TRANSACTION_SUMMARY:
      return {
        ...state,
        userAllStatus: null,
      };
    default:
      return state;
  }
};

export default reducer;
