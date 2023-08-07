import axios from "axios";
import { hostNameUrl } from "../config/api";
import http from "./axios-common";

export function findBookusers(){
        const bookusers = axios.get(`${hostNameUrl}/maturityBonds`);
        return bookusers;
};