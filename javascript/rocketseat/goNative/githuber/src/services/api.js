import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.gihub.com',
});

export default api;
