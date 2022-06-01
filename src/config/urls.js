export const API_BASE_URL = "https://reqres.in/api";

export const getApiUrl = (endPoint) => API_BASE_URL + endPoint

export const LOGIN = getApiUrl('/login')

export const SIGNUP = getApiUrl('/register')