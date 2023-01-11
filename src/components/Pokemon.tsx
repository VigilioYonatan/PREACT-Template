import { Link } from "react-router-dom";

type PokemonProps = { name: string; url: string; index: number };
function Pokemon({ name, url, index }: PokemonProps) {
    return (
        <Link
            to={`/pokemon/${index}`}
            className="w-[150px] bg-black bg-opacity-40 p-2 rounded-md"
        >
            <picture className="w-[100px] h-[100px] block mx-auto">
                <img
                    className=""
                    width={100}
                    height={100}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        index + 1
                    }.png`}
                    alt=""
                />
            </picture>
            <div className="flex flex-col gap-0.5  items-center mt-2">
                <span className="text-white font-bold uppercase ">{name}</span>
                <p className="text-xs text-gray-400">Age: 3</p>
            </div>
        </Link>
    );
}

export default Pokemon;
