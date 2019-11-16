import {API_ROOT} from '../config/envUrl';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: API_ROOT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
