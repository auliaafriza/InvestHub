import apiClient from '../apiClient';
import {GET_USER_ALL, GET_USER_BY_ID} from '../apiUrl';
const getUserProfileApi = () => {
  //   apiClient.defaults.headers['Authorization'] =
  //     'Bearer ' + localStorage.getItem('token');
  return apiClient.get(GET_USER_ALL);
};

export {getUserProfileApi};
