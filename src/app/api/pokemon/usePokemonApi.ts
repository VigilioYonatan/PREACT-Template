import useSWR from "swr";
import { fetchPokemon, fetchPokemonByID } from "./fetchPokemon";
function usePokemonApi() {
    function GetAllPokemon() {
        return useSWR("/pokemon", fetchPokemon, { refreshInterval: 10 });
    }

    function GetPokemonById(id: string) {
        return useSWR(`/pokemon/${id}`, fetchPokemonByID);
    }
    return { GetAllPokemon, GetPokemonById };
}

export default usePokemonApi;
