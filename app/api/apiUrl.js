//UMKM
const POST_UMKM_URL = `InsertUmkmData/`;
const PUT_UMKM_URL = `EditUmkmData/`;
const DELETE_UMKM_URL = `DeleteUmkmData/`;
const GET_UMKM_ALL = 'GetUmkmList/';
const GET_UMKM_BY_ID_URL = id => `GetUmkmById/?Id=${id}`;
//UMKM
//USER
const GET_USER_ALL = 'GetUserList/';
const POST_USER_URL = `InsertUserData/`;
const PUT_USER_URL = `EditUserData/`;
const DELETE_USER_URL = `DeleteUserData/`;
const GET_USER_BY_ID_URL = id => `GetUserById/?Id=${id}`;
//USER

export {
  //UMKM
  GET_UMKM_ALL,
  GET_UMKM_BY_ID_URL,
  POST_UMKM_URL,
  PUT_UMKM_URL,
  DELETE_UMKM_URL,
  //UMKM
  //USER
  GET_USER_ALL,
  GET_USER_BY_ID_URL,
  POST_USER_URL,
  PUT_USER_URL,
  DELETE_USER_URL,
  //USER
};
