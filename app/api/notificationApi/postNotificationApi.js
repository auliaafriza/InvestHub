import apiClient from '../apiClient';
import {POST_NOTIFICATIONS} from '../apiUrl';

const postNotificationsApi = data => {
  return apiClient.post(POST_NOTIFICATIONS, data);
};

export {postNotificationsApi};
