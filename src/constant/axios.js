import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.omdbapi.com/?apikey=491de6b2'
});

export default axiosInstance;