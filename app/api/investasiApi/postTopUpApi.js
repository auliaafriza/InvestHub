import apiClient from '../apiClient';
import {POST_TOP_UP} from '../apiUrl';

const postTopUpApi = data => {
  return apiClient.post(POST_TOP_UP, data);
};

export {postTopUpApi};
