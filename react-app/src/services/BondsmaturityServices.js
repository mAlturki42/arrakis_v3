import { hostNameUrl } from "../config/api";
import axios from "axios";


export const findBondsmaturity = () => {
  const bondsmaturity = axios.get(`${hostNameUrl}/maturityBonds`);
  return bondsmaturity;
  

};