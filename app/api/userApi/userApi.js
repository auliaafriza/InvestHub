import apiClient from '../apiClient';
import {GET_USER_ALL} from '../apiUrl';
const getUserAll = () => {
  //   apiClient.defaults.headers['Authorization'] =
  //     'Bearer ' + localStorage.getItem('token');
  return apiClient.get(GET_USER_ALL);
};

export {getUserAll};
