import axios from "axios";
import { ADMIN_TOKEN_STORAGE_KEY } from "../constants/AuthConstants";

export function adminlogin(loginCredentials){
    return axios.post('http://127.0.0.1:6500/admin/login', loginCredentials);
}

export function storeToken(token){
    localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY,token)
}

export function removeToken(){
    localStorage.removeToken(ADMIN_TOKEN_STORAGE_KEY)

}

export function getToken(){
    localStorage.getItem(ADMIN_TOKEN_STORAGE_KEY)
}

export function fetchAllGarbageFormData(){
    return axios.get('http://127.0.0.1:6500/admin');
}

export function deleteSelectedRequest(reqId){
    return axios.delete(`http://127.0.0.1:6500/admin/${reqId}`);
}

export function fetchGarbageFormDataById(reqId){
    return axios.get(`http://127.0.0.1:6500/admin/${reqId}`);
} 

export function updateRequest(fetchedData){
    return axios.put(`http://127.0.0.1:6500/admin/${fetchedData.req_id}`, fetchedData);
}