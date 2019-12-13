import * as types from '../action/actionTypes';

const initialState = {
  notifications: [],
  notificationsStatus: null,
  notificationsById: [],
  notificationsByIdStatus: null,
  loading: false,
  postNotifications: {},
  postNotificationsStatus: null,
  errors: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //---------------------------------
    // GET_NOTIFICATIONS
    //---------------------------------
    case types.GET_NOTIFICATIONS:
      return {...state};
    case types.GET_NOTIFICATIONS_PENDING:
      return {...state, loading: true};
    case types.GET_NOTIFICATIONS_FULFILLED:
      return {
        ...state,
        notifications: action.payload.data,
        loading: false,
        notificationsStatus: true,
      };
    case types.GET_NOTIFICATIONS_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        notificationsStatus: false,
      };
    //---------------------------------
    // GET_NOTIFICATIONS_BY_ID
    //---------------------------------
    case types.GET_NOTIFICATIONS_BY_ID:
      return {...state};
    case types.GET_NOTIFICATIONS_BY_ID_PENDING:
      return {...state, loading: true};
    case types.GET_NOTIFICATIONS_BY_ID_FULFILLED:
      return {
        ...state,
        notificationsById: action.payload.data,
        loading: false,
        notificationsByIdStatus: true,
      };
    case types.GET_NOTIFICATIONS_BY_ID_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        notificationsByIdStatus: false,
      };
    //---------------------------------
    // POST_NOTIFICATIONS
    //---------------------------------
    case types.POST_NOTIFICATIONS:
      return {...state};
    case types.POST_NOTIFICATIONS_PENDING:
      return {...state, loading: true};
    case types.POST_NOTIFICATIONS_FULFILLED:
      return {
        ...state,
        postNotifications: action.payload.data,
        loading: false,
        postNotificationsStatus: true,
      };
    case types.POST_NOTIFICATIONS_REJECTED:
      return {
        ...state,
        errors: action.payload.response.data,
        loading: false,
        postNotificationsStatus: false,
      };

    default:
      return state;
  }
};

export default reducer;
