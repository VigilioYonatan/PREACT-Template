import BASE_URL from "~/app/config/axios";
import { APIGetAllPokemons, APIGetPokemonByID } from "./typesPokemon";

export async function fetchPokemon(url: string): Promise<APIGetAllPokemons> {
    const { data } = await BASE_URL.get<APIGetAllPokemons>(url);
    return data;
}
export async function fetchPokemonByID(
    url: string
): Promise<APIGetPokemonByID> {
    const { data } = await BASE_URL.get<APIGetPokemonByID>(url);
    return data;
}
