import axios from "axios"; 
import { environment } from "@/environment";

const token = localStorage.getItem("token") ?? "";

const Axios = axios.create({
  baseURL : environment.API_URL,
  headers: {
     Authorization: `Bearer ${token}`,
  }
});

Axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default Axios;