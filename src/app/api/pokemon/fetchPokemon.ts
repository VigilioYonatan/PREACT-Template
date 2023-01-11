import BASE_URL from "~/app/config/axios";
import { APIGetAllPokemons, APIGetPokemonByID } from "./typesPokemon";

export async function fetchPokemon(): Promise<APIGetAllPokemons> {
    const { data } = await BASE_URL.get<APIGetAllPokemons>("/pokemon");
    return data;
}
export async function fetchPokemonByID(id: string): Promise<APIGetPokemonByID> {
    const { data } = await BASE_URL.get<APIGetPokemonByID>(`/pokemon/${id}`);
    return data;
}
