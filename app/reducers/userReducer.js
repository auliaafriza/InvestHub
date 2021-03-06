import * as types from '../action/actionTypes';

const initialState = {
  userAll: [],
  userById: [],
  userAllStatus: null,
  userByIdStatus: null,
  postUserStatus: null,
  loading: false,
  putUser: {},
  putUserStatus: null,
  deleteUser: {},
  deleteUserStatus: null,
  postUser: {},
  postUserStatus: null,
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

    case types.GET_USER_BY_ID:
      return {...state};
    case types.GET_USER_BY_ID_PENDING:
      return {...state, loading: true};
    case types.GET_USER_BY_ID_FULFILLED:
      return {
        ...state,
        userById: action.payload.data,
        loading: false,
        userByIdStatus: true,
      };
    case types.GET_USER_BY_ID_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        userByIdStatus: false,
      };

    case types.POST_USER:
      return {...state};
    case types.POST_USER_PENDING:
      return {...state, loading: true};
    case types.POST_USER_FULFILLED:
      return {
        ...state,

        loading: false,
        postUserStatus: true,
      };
    case types.POST_USER_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        postUserStatus: false,
      };

    case types.PUT_USER:
      return {...state};
    case types.PUT_USER_PENDING:
      return {...state, loading: true};
    case types.PUT_USER_FULFILLED:
      return {
        ...state,
        loading: false,
        putUser: action.payload.data,
        putUserStatus: true,
      };
    case types.PUT_USER_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        putUserStatus: false,
      };

    case types.DELETE_USER:
      return {...state};
    case types.DELETE_USER_PENDING:
      return {...state, loading: true};
    case types.DELETE_USER_FULFILLED:
      return {
        ...state,
        loading: false,
        deleteUser: action.payload.data,
        deleteUserStatus: true,
      };
    case types.DELETE_USER_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        deleteUserStatus: false,
      };
    case types.RESET_USER:
      return {
        ...state,
        userAllStatus: null,
        userByIdStatus: null,
        postUserStatus: null,
        putUserStatus: null,
      };
    default:
      return state;
  }
};

export default reducer;
