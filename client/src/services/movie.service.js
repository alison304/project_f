import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const getMovieList = () => {
    return axios.get(`${BASE_URL}/api/movie/`);
}

export const getOneMovie = (id) => {
    return axios.get(`${BASE_URL}/api/movie/${id}`);
}

export const createMovie = (movie) => {
    return axios.post(`${BASE_URL}/api/movie/`, movie);
}

export const updateMovie = (id, movie) => {
    return axios.put(`${BASE_URL}/api/movie/${id}`, movie);
}

export const removeMovie = (id) => {
    return axios.delete(`${BASE_URL}/api/movie/${id}`);
}