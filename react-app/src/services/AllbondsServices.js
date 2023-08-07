import { hostNameUrl } from "../config/api";
import axios from "axios";


export const findAllbonds = () => {
  const allbonds = axios.get(`${hostNameUrl}/...`);
  return allbonds;
  

};