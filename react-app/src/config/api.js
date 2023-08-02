// export const hostNameUrl = "https://<PROJECT-ID>.<REGION>.r.appspot.com";
import axios from 'axios';

export const hostNameUrl = "http://localhost:8080/api/v1";

const api = axios.create({
  baseURL: "https://localhost:8080"
});

export default api;