import { hostNameUrl } from "../config/api";
import axios from "axios";


export const findBookusers = () => {
  const bookusers = axios.get(`${hostNameUrl}/maturityBonds`);
  return bookusers;
  

};