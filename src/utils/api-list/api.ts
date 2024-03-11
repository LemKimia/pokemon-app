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

export const getPokemonDetails = async (name: string) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return response.data as IDetail;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
