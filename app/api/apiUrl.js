//UMKM
const POST_UMKM_URL = `InsertUmkmData/`;
const PUT_UMKM_URL = `EditUmkmData/`;
const DELETE_UMKM_URL = `DeleteUmkmData/`;
const GET_UMKM_ALL = 'GetUmkmList/';
const GET_UMKM_BY_ID_URL = id => `GetUmkmById/?Id=${id}`;
//UMKM
//INVEST
const GET_INVEST_BY_ID = id => `GetHistoryTransactionTypeById/?Id=${id}`;
const POST_INVEST = `InsertHistoryTransactionTypeData/`;
const POST_TOP_UP = `InsertHistoryTransactionTypeData/`;
//INVEST
//USER
const GET_USER_ALL = 'GetUserList/';
const POST_USER_URL = `InsertUserData/`;
const PUT_USER_URL = `EditUserData/`;
const DELETE_USER_URL = `DeleteUserData/`;
const GET_USER_BY_ID_URL = id => `GetUserById/?Id=${id}`;
//USER
//NOTIFICATIONS
const GET_NOTIFICATIONS_BY_ID = id => `GetHistoryTransactionTypeById/?Id=${id}`;
const GET_NOTIFICATIONS = `InsertHistoryTransactionTypeData/`;
const POST_NOTIFICATIONS = `InsertHistoryTransactionTypeData/`;
//NOTIFICATIONS

export {
  //UMKM
  GET_UMKM_ALL,
  GET_UMKM_BY_ID_URL,
  POST_UMKM_URL,
  PUT_UMKM_URL,
  DELETE_UMKM_URL,
  GET_INVEST_BY_ID,
  POST_INVEST,
  POST_TOP_UP,
  //UMKM
  //USER
  GET_USER_ALL,
  GET_USER_BY_ID_URL,
  POST_USER_URL,
  PUT_USER_URL,
  DELETE_USER_URL,
  //USER
  //NOTIFICATIONS
  GET_NOTIFICATIONS_BY_ID,
  GET_NOTIFICATIONS,
  POST_NOTIFICATIONS,
};
