import axios from "axios";
import http from "./axios-common";

export function findBookusers(){
        const bookusers = axios.get('${hostNameUrl}/maturitybond');
        return bookusers;
};