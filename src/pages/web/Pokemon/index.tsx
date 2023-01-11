import usePokemonApi from "~/app/api/pokemon/usePokemonApi";
import Pokemon from "~/components/Pokemon";
import Show from "./Show";
import { JSX } from "preact/jsx-runtime";

function Index() {
    const { data, isLoading, isValidating } = usePokemonApi().GetAllPokemon();

    let Pokemons: null | JSX.Element[] | JSX.Element = null;

    if (isLoading) {
        Pokemons = <p>Cargando...</p>;
    }

    if (data) {
        Pokemons = data.results.map((pokemon, index) => (
            <Pokemon key={pokemon.name} {...pokemon} index={index} />
        ));
    }
    return (
        <>
            <section className="container mx-auto">
                <h2 className="text-2xl text-center mb-3 text-yellow-500 font-bold">
                    Pokemons
                </h2>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                    {isValidating ? <h1>cargandoisValidating</h1> : null}
                    {Pokemons}
                </div>
            </section>
        </>
    );
}

type PokemonPagesProps = {
    Index: () => JSX.Element;
    Show: () => JSX.Element;
};
const PokemonPages: PokemonPagesProps = Object.assign({ Index, Show });

export default PokemonPages;
