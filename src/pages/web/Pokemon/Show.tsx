import usePokemonApi from "~/app/api/pokemon/usePokemonApi";
import { useParams } from "react-router-dom";
export type ShowProps = { path: string };
function Show() {
    const { pokemon } = useParams() as { pokemon: string };

    const { data, isLoading } = usePokemonApi().GetPokemonById(pokemon);
    if (isLoading) {
        return <p>cargando..</p>;
    }
    return (
        <div className="container mx-auto">
            <div className="flex gap-4">
                <div className="">
                    <img src={data?.sprites.front_default} width={300} alt="" />
                    <div className="flex justify-center items-center gap-2">
                        <img
                            className="w-[80px] h-[80px] border-2 object-cover"
                            src={data?.sprites.back_default}
                            alt=""
                        />
                        <img
                            className="w-[80px] h-[80px] border-2 object-cover"
                            src={data?.sprites.front_shiny}
                            alt=""
                        />
                        <img
                            className="w-[80px] h-[80px] border-2 object-cover"
                            src={data?.sprites.other?.dream_world.front_default}
                            alt=""
                        />
                    </div>
                </div>
                <div className="">
                    <p className="text-yellow-500 uppercase font-bold text-3xl text-center">
                        {data?.name}
                    </p>
                    <p className="text-white ">Altura:{data?.height} mt</p>
                    <p className="text-white first-letter:">
                        Peso:{data?.weight} kg
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Show;
