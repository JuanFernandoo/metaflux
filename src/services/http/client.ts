import axios from "axios"
import { API_GAMES } from "./"

export const httpClient = axios.create({
    baseURL: API_GAMES.baseURL,
    headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": API_GAMES.API_KEY,
        "X-RapidAPI-Host": API_GAMES.HOST,

    }
})

httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Error de la API:", error)
        return Promise.reject(error)
    }
)