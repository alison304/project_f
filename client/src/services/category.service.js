import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const getCategoryList = () => {
    return axios.get(`${BASE_URL}/api/category/`);
}

export const getOneCategory = (id) => {
    return axios.get(`${BASE_URL}/api/category/${id}`);
}

export const createCategory = (category) => {
    return axios.post(`${BASE_URL}/api/category/`, category);
}

export const updateCategory = (id, category) => {
    return axios.put(`${BASE_URL}/api/category/${id}`, category);
}

export const removeCategory = (id) => {
    return axios.delete(`${BASE_URL}/api/category/${id}`);
}