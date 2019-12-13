import apiClient from '../apiClient';
import {GET_NOTIFICATIONS} from '../apiUrl';

const getNotifications = () => {
  return apiClient.get(GET_NOTIFICATIONS());
};

export {getNotifications};
