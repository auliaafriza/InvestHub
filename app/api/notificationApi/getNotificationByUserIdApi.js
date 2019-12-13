import apiClient from '../apiClient';
import {GET_NOTIFICATIONS_BY_ID} from '../apiUrl';

const getNotificationsByIdApi = id => {
  return apiClient.get(GET_NOTIFICATIONS_BY_ID(id));
};

export {getNotificationsByIdApi};
