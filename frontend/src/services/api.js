import axios from "axios";
import { getToken } from "../helpers/session";

const api = axios.create({
  // baseURL: "https://google.com"
});
api.interceptors.request.use(async (config) => {
  const token = getToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
