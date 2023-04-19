import axios from "axios";
import {
  API_BASE_URL
} from "configs/AppConfig";

const service = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 60000,
});


export default service;
