import { useQuery } from "@tanstack/react-query";
import { fetchPokemon, fetchPokemonByID } from "./fetchPokemon";
function usePokemonApi() {
    function GetAllPokemon() {
        return useQuery(["pokemons"], fetchPokemon);
    }

    function GetPokemonById(id: string) {
        return useQuery(["pokemon", id], () => fetchPokemonByID(id));
    }
    return { GetAllPokemon, GetPokemonById };
}

export default usePokemonApi;
