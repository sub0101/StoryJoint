import axios from 'axios';
import refresh from './hooks/refreshToken';
import { getFromLocalStorage } from '../utils/lcoalstorage';

const BASE_URL= import.meta.env.VITE_BASE_URL


export const instance = axios.create({
    baseURL: BASE_URL, // Set a base URL for all requests
   
    headers: {
      'Content-Type': 'application/json', // Set default headers for all requests
    },

      withCredentials: true
  });

 const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    // headers: { 'Content-Type': 'application/json' },
    headers: { 'Content-Type': 'multipart/form-data' },
    withCredentials: true
});

axiosPrivate.interceptors.request.use(
  config => {
 
      console.log("inside the interv")
      if (!config.headers['Authorization']) {
          console.log("sending token")
        const token  =  getFromLocalStorage("accessToken")
          config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
  }, (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
  response => response,
  async (error) => {
      const prevRequest = error?.config;
      console.log("error axiosprivate")
      if (error?.response?.status === 404  && !prevRequest?.sent ) {
          console.log("unauthorized")
          prevRequest.sent = true;
          console.log("refreshing the  token")
          const newAccessToken = await refresh();
     
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
      }
      
      return Promise.reject(error);
  }
);

export default axiosPrivate



