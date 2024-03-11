import axios from "axios";
import { IDetail, IPokemon, IResponse } from "../types/type";

export const getPokemon = async (): Promise<IResponse<IPokemon[]>> => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);

    return response.data as IResponse<IPokemon>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

const setDetailURL = (url: string) => {
  const pokeApiLink = url;
  return pokeApiLink.split("/")[6];
};

export const getPokemonDetails = async (url: string) => {
  try {
    const id = setDetailURL(url);
    const newLink = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await axios.get(newLink);

    return response.data as IDetail;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
