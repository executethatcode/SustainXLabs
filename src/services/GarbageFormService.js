import axios from "axios";
import { SAVE_FORMDATA_API_ROUTE } from "../constants/ApiConstants";

export function saveGarbageFormData(garbageFormData){
    
    return axios.post(SAVE_FORMDATA_API_ROUTE,garbageFormData);

}

export function fetchGarbageFormDataById(){
    return axios.get(SAVE_FORMDATA_API_ROUTE);
}

