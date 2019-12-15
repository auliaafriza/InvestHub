import * as types from '../action/actionTypes';

const initialState = {
  umkmAll: [],
  umkmAllStatus: null,
  umkmById: [],
  umkmByIdStatus: null,
  loading: false,
  putUmkm: {},
  putUmkmStatus: null,
  deleteUmkm: {},
  deleteUmkmStatus: null,
  postUmkm: {},
  postUmkmStatus: null,
  errors: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //---------------------------------
    // GET_UMKM_ALL
    //---------------------------------
    case types.GET_UMKM_ALL:
      return {...state, umkmAll: action.payload, umkmAllStatus: true};
    case types.GET_UMKM_ALL_PENDING:
      return {...state, loading: true};
    case types.GET_UMKM_ALL_FULFILLED:
      return {
        ...state,
        umkmAll: action.payload.data,
        loading: false,
        umkmAllStatus: true,
      };
    case types.GET_UMKM_ALL_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        umkmAllStatus: false,
      };

    case types.GET_UMKM_BY_ID:
      return {...state, umkmById: action.payload};
    case types.GET_UMKM_BY_ID_PENDING:
      return {...state, loading: true};
    case types.GET_UMKM_BY_ID_FULFILLED:
      return {
        ...state,
        umkmById: action.payload.data,
        loading: false,
        umkmByIdStatus: true,
      };
    case types.GET_UMKM_BY_ID_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        umkmByIdStatus: false,
      };

    case types.POST_UMKM:
      return {...state, postUmkm: action.payload};
    case types.POST_UMKM_PENDING:
      return {...state, loading: true};
    case types.POST_UMKM_FULFILLED:
      return {
        ...state,
        loading: false,
        postUmkm: action.payload.data,
        postUmkmStatus: true,
      };
    case types.POST_UMKM_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        postUmkmStatus: false,
      };

    case types.PUT_UMKM:
      return {...state};
    case types.PUT_UMKM_PENDING:
      return {...state, loading: true};
    case types.PUT_UMKM_FULFILLED:
      return {
        ...state,
        loading: false,
        putUmkm: action.payload.data,
        putUmkmStatus: true,
      };
    case types.PUT_UMKM_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        putUmkmStatus: false,
      };

    case types.DELETE_UMKM:
      return {...state};
    case types.DELETE_UMKM_PENDING:
      return {...state, loading: true};
    case types.DELETE_UMKM_FULFILLED:
      return {
        ...state,
        loading: false,
        deleteUmkm: action.payload.data,
        deleteUmkmStatus: true,
      };
    case types.DELETE_UMKM_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        deleteUmkmStatus: false,
      };

    case types.RESET_UMKM:
      return {
        ...state,
        umkmAllStatus: null,
        postUmkmStatus: null,
        umkmByIdStatus: null,
        putUmkmStatus: null,
        deleteUmkmStatus: null,
      };
    default:
      return state;
  }
};

export default reducer;
