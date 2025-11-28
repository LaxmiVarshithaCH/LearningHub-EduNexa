// src/services/authService.js
import { apiClient } from './apiClient';

export const login = async (credentials) => {
  // credentials: { email, password }
  const response = await apiClient.post('/login', credentials);
  return response.data;
};

export const signup = async (user) => {
  // user: { username, email, password }
  const response = await apiClient.post('/signup', user);
  return response.data;
};
