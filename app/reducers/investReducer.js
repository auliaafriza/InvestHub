import * as types from '../action/actionTypes';

const initialState = {
  investById: [],
  investByIdStatus: null,
  loading: false,
  postInvest: {},
  postInvestStatus: null,
  errors: {},
  postTopUp: {},
  postTopUpStatus: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //---------------------------------
    // GET_INVEST_BY_ID
    //---------------------------------
    case types.GET_INVEST_BY_ID:
      return {...state};
    case types.GET_INVEST_BY_ID_PENDING:
      return {...state, loading: true};
    case types.GET_INVEST_BY_ID_FULFILLED:
      return {
        ...state,
        investById: action.payload.data,
        loading: false,
        investByIdStatus: true,
      };
    case types.GET_INVEST_BY_ID_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        investByIdStatus: false,
      };
    //---------------------------------
    // POST_INVEST
    //---------------------------------
    case types.POST_INVEST:
      return {...state};
    case types.POST_INVEST_PENDING:
      return {...state, loading: true};
    case types.POST_INVEST_FULFILLED:
      return {
        ...state,
        postInvest: action.payload.data,
        loading: false,
        postInvestStatus: true,
      };
    case types.POST_INVEST_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        postInvestStatus: false,
      };
    //---------------------------------
    // POST_TOP_UP
    //---------------------------------
    case types.POST_TOP_UP:
      return {...state};
    case types.POST_TOP_UP_PENDING:
      return {...state, loading: true};
    case types.POST_TOP_UP_FULFILLED:
      return {
        ...state,
        postTopUp: action.payload.data,
        loading: false,
        postTopUpStatus: true,
      };
    case types.POST_TOP_UP_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        postTopUpStatus: false,
      };

    default:
      return state;
  }
};

export default reducer;
