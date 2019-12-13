import apiClient from '../apiClient';
import {POST_INVEST} from '../apiUrl';

const postInvestApi = data => {
  return apiClient.post(POST_INVEST, data);
};

export {postInvestApi};
