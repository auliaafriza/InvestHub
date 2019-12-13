import apiClient from '../apiClient';
import {GET_INVEST_BY_ID} from '../apiUrl';

const getInvestByIdApi = id => {
  return apiClient.get(GET_INVEST_BY_ID(id));
};

export {getInvestByIdApi};
