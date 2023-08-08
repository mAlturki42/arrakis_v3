import { hostNameUrl } from "../config/api";
import axios from "axios";


export const findActivebonds = () => {
  const activebonds = axios.get(`${hostNameUrl}/activeBonds`);
  return activebonds;
  

};