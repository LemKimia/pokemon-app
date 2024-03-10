import axios from "axios";
import { IPokemon, IResponse } from "../types/type";

export const getPokemon = async (): Promise<IResponse<IPokemon[]>> => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    
    return response.data as IResponse<IPokemon>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getPokemonDetails = async (): Promise<IResponse<IPokemon[]>> => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
   
    return response.data as IResponse<IPokemon>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};