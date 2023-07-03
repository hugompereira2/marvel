import { Character, Comic } from "@/types/types";
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

export async function getCharacters(page: number) {
  try {
    console.log(page);
    let offset = "";
    if (page > 1) {
      offset = `&offset=${20 * (page - 1)}`;
    }

    const response = await api.get(`/characters?apikey=${API_KEY}${offset}`);

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
    const { code, data: responseData }: apiResponse<Character[]> = data;

    return { code, data: responseData };
  } catch (error) {
    console.error("Ocorreu um erro na requisição getCharacterById:", error);
    throw error;
  }
}

export async function getCharacterComicsById(id: number) {
  try {
    const response = await api.get(
      `/characters/${id}/comics?apikey=${API_KEY}`
    );

    const { data } = response;
    const { code, data: responseData }: apiResponse<Comic[]> = data;

    return { code, data: responseData };
  } catch (error) {
    console.error(
      "Ocorreu um erro na requisição getCharacterComicsById:",
      error
    );
    throw error;
  }
}

export async function getCharactersByName(name: string, page: number) {
  try {
    let offset = "";
    if (page > 1) {
      offset = `&offset=${20 * (page - 1)}`;
    }

    const response = await api.get(
      `/characters?nameStartsWith=${name}&apikey=${API_KEY}${offset}`
    );

    const { data } = response;
    const { code, data: responseData }: apiResponse<Character[] | []> = data;

    return { code, data: responseData };
  } catch (error) {
    console.error("Ocorreu um erro na requisição getCharactersByName:", error);
    throw error;
  }
}
