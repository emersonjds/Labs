import axios from 'axios';

const api = axios.create({
  baseUrl: 'localhost:3333',
});

export default api;
