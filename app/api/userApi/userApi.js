import apiClient from '../apiClient';
import {
  GET_USER_ALL,
  GET_USER_BY_ID_URL,
  POST_USER_URL,
  DELETE_USER_URL,
  PUT_USER_URL,
} from '../apiUrl';
const getUserAll = () => {
  return apiClient.get(GET_USER_ALL);
};

const getUserByIdApi = id => {
  return apiClient.get(GET_USER_BY_ID_URL(id));
};

const postUserApi = data => {
  return apiClient.post(POST_USER_URL, data);
};
const putUserApi = data => {
  return apiClient.post(PUT_USER_URL, data);
};

const deleteUserApi = data => {
  return apiClient.post(DELETE_USER_URL, data);
};

export {getUserAll, getUserByIdApi, postUserApi, putUserApi, deleteUserApi};
