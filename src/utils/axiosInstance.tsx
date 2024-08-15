// lib/axiosInstance.js
import axios from 'axios';
import { AUTH_API_BASE_URL, CRM_API_BASE_URL } from '@/Constant';

// Create the Axios instance for authentication-related requests
const authAxiosInstance = axios.create({
  baseURL: AUTH_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json', // Set Content-Type header
    'Authorization': 'Mnbvcxz@3817', // Set Authorization header
  },
  // other default configurations if needed
});

// Create the Axios instance for CRM-related requests
const crmAxiosInstance = axios.create({
  baseURL: CRM_API_BASE_URL,
  // other default configurations if needed
});


export { authAxiosInstance, crmAxiosInstance };