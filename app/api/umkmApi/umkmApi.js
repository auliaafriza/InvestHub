import apiClient from '../apiClient';
import {
  GET_UMKM_ALL,
  GET_UMKM_BY_ID_URL,
  POST_UMKM_URL,
  PUT_UMKM_URL,
  DELETE_UMKM_URL,
} from '../apiUrl';
const getUmkmAllApi = () => {
  return apiClient.get(GET_UMKM_ALL);
};
const getUmkmByIdApi = id => {
  return apiClient.get(GET_UMKM_BY_ID_URL(id));
};

const postUmkmApi = data => {
  return apiClient.post(POST_UMKM_URL, data);
};

const putUmkmApi = data => {
  return apiClient.post(PUT_UMKM_URL, data);
};

const deleteUmkmApi = data => {
  return apiClient.post(DELETE_UMKM_URL, data);
};

export {getUmkmAllApi, getUmkmByIdApi, postUmkmApi, putUmkmApi, deleteUmkmApi};
