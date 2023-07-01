import axios from "axios";

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
});

export default api;

const API_KEY = "cca61f51700a5039fc1e7fb464c5933f";

interface apiResponse<T> {
  code: number;
  data: {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    results: T;
  };
}

import { Character } from "@/types/character";

export async function getCharacters() {
  try {
    const response = await api.get(`/characters?apikey=${API_KEY}`);

    const { data } = response;
    const { code, data: responseData }: apiResponse<Character[]> = data;

    return { code, data: responseData };
  } catch (error) {
    console.error("Ocorreu um erro na requisição getCharacters:", error);
    throw error;
  }
}

export async function getCharacterById(id: number) {
  try {
    const response = await api.get(`/characters/${id}?apikey=${API_KEY}`);

    const { data } = response;
    const { code, data: responseData }: apiResponse<Character> = data;

    return { code, data: responseData };
  } catch (error) {
    console.error("Ocorreu um erro na requisição getCharacterById:", error);
    throw error;
  }
}
