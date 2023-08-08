import { hostNameUrl } from "../config/api";
import axios from "axios";


export const findMybonds = () => {
  const mybonds = axios.get(`${hostNameUrl}/bondsBooksResponsibleFor`);
  return mybonds;
  

};